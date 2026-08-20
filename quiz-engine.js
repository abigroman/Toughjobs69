// Toughjobs Trade Quiz engine. Drives the whole flow:
// intro → Q1-5 → name/email gate → probe → Q6-10 → marketing profile →
// Q11-15 → probe → Q16-20 → final call-ask → results + leaderboard save.
// Each trivia question is TIMED (window.QUIZ_CONFIG.timePerQuestion) so players
// can't look answers up. Leaderboard + leads persist in localStorage.
(function(){
  var CFG = window.QUIZ_CONFIG;
  var LB_KEY = 'tj-quiz-leaderboard';
  var LEAD_KEY = 'tj-quiz-leads';

  function $(id){ return document.getElementById(id); }
  function esc(s){ return String(s||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
  function getParam(n){ return new URLSearchParams(location.search).get(n); }

  function tradeMeta(slug){
    var d = (window.TRADE_DATA||{})[slug];
    return { slug:slug, name: d ? d.name : 'Home Services', label: d ? (d.name) : 'the Trades' };
  }

  function saveLead(lead){ if(window.QuizStore){ window.QuizStore.addLead(lead); } }
  function saveScore(entry){ if(window.QuizStore){ window.QuizStore.addScore(entry); } }

  var AVATAR_EMOJIS = ['🔨','⚡','🔧','🏗️','🚛','🧰','🛠️','🌳','💧','🔥','🎨','🧱','🚿','🐜','🌞','🏠','🔑','🐶'];

  function TJQuiz(mountId){
    this.root = $(mountId);
    this.slug = getParam('trade') || 'handyman';
    this.meta = tradeMeta(this.slug);
    this.questions = window.buildQuiz(this.slug);
    this.idx = 0;
    this.score = 0;
    this.correct = 0;
    this.streak = 0;
    this.lead = { trade:this.slug, tradeName:this.meta.name, profile:{}, probes:{}, callOptIn:false };
    this.timer = null;
    this.timeLeft = 0;
  }

  TJQuiz.prototype.start = function(){ this.renderIntro(); };

  TJQuiz.prototype.shell = function(inner, opts){
    opts = opts||{};
    var pct = Math.round((this.idx/ CFG.totalTrivia)*100);
    var bar = opts.hideProgress ? '' :
      '<div class="q-progress"><div class="q-progress-bar" style="width:'+pct+'%"></div></div>'+
      '<div class="q-progress-label">Question '+Math.min(this.idx+1,CFG.totalTrivia)+' of '+CFG.totalTrivia+' · Score '+this.score.toLocaleString()+'</div>';
    this.root.innerHTML = '<div class="q-card">'+bar+inner+'</div>';
  };

  TJQuiz.prototype.renderIntro = function(){
    this.root.innerHTML =
      '<div class="q-card q-center">'+
        '<span class="q-eyebrow">Toughjobs Trade Challenge</span>'+
        '<h1 class="q-title">The '+esc(this.meta.name)+'<br>Trade Quiz</h1>'+
        '<p class="q-lede">20 questions built for your trade. You\'ve got <b>'+CFG.timePerQuestion+' seconds</b> each — answer fast for bonus points. Think you know your craft? Prove it and land on the leaderboard.</p>'+
        '<ul class="q-rules">'+
          '<li>⏱️ '+CFG.timePerQuestion+' seconds per question — no time to Google it</li>'+
          '<li>⚡ Faster right answers = more points</li>'+
          '<li>🏆 Top scores go on the wall of fame</li>'+
        '</ul>'+
        '<button class="q-btn q-btn-lg" id="q-start">Start the Challenge →</button>'+
        '<a class="q-link" href="quiz-leaderboard.html">See the leaderboard</a>'+
      '</div>';
    var self=this; $('q-start').onclick=function(){ self.next(); };
  };

  TJQuiz.prototype.next = function(){
    // Decide what comes next based on how many trivia questions have been shown.
    var n = this.idx;
    if (n === 5 && !this.lead.name){ return this.renderLeadGate(); }
    if (n === 5 && !this._probe0){ this._probe0=true; return this.renderProbe(0); }
    if (n === 10 && !this._profileDone){ return this.renderProfile(); }
    if (n === 15 && !this._probe1){ this._probe1=true; return this.renderProbe(2); }
    if (n >= CFG.totalTrivia){ return this.renderFinalAsk(); }
    this.renderQuestion();
  };

  TJQuiz.prototype.renderQuestion = function(){
    var q = this.questions[this.idx];
    var choices = q.choices.map(function(c,i){
      return '<button class="q-choice" data-i="'+i+'">'+esc(c)+'</button>';
    }).join('');
    this.shell(
      '<div class="q-timer" id="q-timer"><div class="q-timer-bar" id="q-timer-bar"></div><span id="q-timer-num">'+CFG.timePerQuestion+'</span></div>'+
      '<h2 class="q-question">'+esc(q.q)+'</h2>'+
      '<div class="q-choices">'+choices+'</div>'+
      '<div class="q-fact" id="q-fact" hidden></div>'
    );
    var self=this;
    Array.prototype.forEach.call(this.root.querySelectorAll('.q-choice'), function(b){
      b.onclick=function(){ self.answer(parseInt(b.dataset.i,10)); };
    });
    this.startTimer();
  };

  TJQuiz.prototype.startTimer = function(){
    var self=this; this.timeLeft = CFG.timePerQuestion;
    var bar=$('q-timer-bar'), num=$('q-timer-num');
    var tick=function(){
      var pct=(self.timeLeft/CFG.timePerQuestion)*100;
      if(bar) bar.style.width=pct+'%';
      if(num) num.textContent=Math.ceil(self.timeLeft);
      if(bar) bar.style.background = self.timeLeft<=5 ? '#C8262A' : '#2f9e44';
      if(self.timeLeft<=0){ clearInterval(self.timer); self.answer(-1); return; }
      self.timeLeft -= 0.1;
    };
    tick();
    this.timer=setInterval(tick,100);
  };

  TJQuiz.prototype.answer = function(choice){
    clearInterval(this.timer);
    var q=this.questions[this.idx];
    var right = choice===q.answer;
    var earned=0;
    if(right){
      this.correct++; this.streak++;
      earned = CFG.basePoints + Math.round(Math.max(0,this.timeLeft)*CFG.speedMultiplier) + (this.streak>=3? 50:0);
      this.score += earned;
    } else { this.streak=0; }
    // reveal
    Array.prototype.forEach.call(this.root.querySelectorAll('.q-choice'), function(b){
      var i=parseInt(b.dataset.i,10); b.disabled=true;
      if(i===q.answer) b.classList.add('q-correct');
      else if(i===choice) b.classList.add('q-wrong');
    });
    var fact=$('q-fact');
    if(fact){ fact.hidden=false; fact.innerHTML=(right?'<b class="q-ok">Correct! +'+earned+'</b> ':(choice===-1?'<b class="q-to">Time!</b> ':'<b class="q-no">Not quite.</b> '))+esc(q.fact); }
    var self=this;
    var nx=document.createElement('button'); nx.className='q-btn q-next'; nx.textContent=(this.idx+1>=CFG.totalTrivia?'See what\'s next →':'Next →');
    nx.onclick=function(){ self.idx++; self.next(); };
    this.root.querySelector('.q-card').appendChild(nx);
  };

  TJQuiz.prototype.renderLeadGate = function(){
    this.shell(
      '<span class="q-eyebrow">You\'re on fire 🔥</span>'+
      '<h2 class="q-question">Nice start — '+this.correct+' of 5 so far.</h2>'+
      '<p class="q-lede">Drop your name and email so we can save your score to the leaderboard and send your results.</p>'+
      '<div class="q-avatar-block">'+
        '<div class="q-avatar-label">Pick a badge for the leaderboard</div>'+
        '<div class="q-avatar-preview" id="q-av-preview">'+AVATAR_EMOJIS[0]+'</div>'+
        '<div class="q-emoji-grid" id="q-emoji-grid">'+AVATAR_EMOJIS.map(function(e,i){return '<button type="button" class="q-emoji'+(i===0?' sel':'')+'" data-e="'+e+'">'+e+'</button>';}).join('')+'</div>'+
        '<label class="q-upload">Or upload your logo / photo<input type="file" id="q-logo" accept="image/*" hidden /></label>'+
      '</div>'+
      '<div class="q-form">'+
        '<input class="q-input" id="q-name" placeholder="First name + last initial (e.g. Mike R.)" autocomplete="name" />'+
        '<input class="q-input" id="q-email" type="email" placeholder="Email address" autocomplete="email" />'+
        '<input class="q-input" id="q-city" placeholder="City / town (e.g. Peoria, IL)" />'+
        '<div class="q-err" id="q-err" hidden></div>'+
        '<button class="q-btn q-btn-lg" id="q-save">Save my spot →</button>'+
      '</div>', {hideProgress:true}
    );
    var self=this;
    this.lead.avatar = AVATAR_EMOJIS[0];
    var preview=$('q-av-preview');
    Array.prototype.forEach.call(this.root.querySelectorAll('.q-emoji'), function(b){
      b.onclick=function(){
        self.lead.avatar=b.dataset.e; self.lead.avatarType='emoji';
        preview.textContent=b.dataset.e; preview.style.backgroundImage='';
        self.root.querySelectorAll('.q-emoji').forEach(function(x){x.classList.remove('sel');}); b.classList.add('sel');
      };
    });
    $('q-logo').onchange=function(){
      var f=this.files&&this.files[0]; if(!f) return;
      var img=new Image(), rd=new FileReader();
      rd.onload=function(){ img.onload=function(){
        var s=128, c=document.createElement('canvas'); c.width=s; c.height=s;
        var ctx=c.getContext('2d'); var r=Math.min(img.width,img.height);
        ctx.drawImage(img,(img.width-r)/2,(img.height-r)/2,r,r,0,0,s,s);
        var url=c.toDataURL('image/webp',0.8);
        self.lead.avatar=url; self.lead.avatarType='image';
        preview.textContent=''; preview.style.backgroundImage='url('+url+')';
        self.root.querySelectorAll('.q-emoji').forEach(function(x){x.classList.remove('sel');});
      }; img.src=rd.result; };
      rd.readAsDataURL(f);
    };
    $('q-save').onclick=function(){
      var name=$('q-name').value.trim(), email=$('q-email').value.trim(), city=$('q-city').value.trim();
      if(!name||!/.+@.+\..+/.test(email)){ var e=$('q-err'); e.hidden=false; e.textContent='Please enter your name and a valid email.'; return; }
      self.lead.name=name; self.lead.email=email; self.lead.city=city;
      saveLead(Object.assign({stage:'started',ts:Date.now()}, self.lead));
      self.next();
    };
  };

  TJQuiz.prototype.renderProbe = function(pi){
    var p=window.PROBES[pi]; var self=this;
    var body;
    if(p.type==='text'){
      body='<input class="q-input" id="q-probe" placeholder="'+esc(p.placeholder||'')+'" />';
    } else {
      body='<div class="q-choices q-choices-tall">'+p.choices.map(function(c,i){return '<button class="q-choice" data-i="'+i+'">'+esc(c)+'</button>';}).join('')+'</div>';
    }
    this.shell('<span class="q-eyebrow">Quick question about you</span><h2 class="q-question">'+esc(p.q)+'</h2>'+body+(p.type==='text'?'<button class="q-btn q-btn-lg" id="q-probe-next">Continue →</button>':''),{hideProgress:true});
    var done=function(val){ self.lead.probes[p.id]=val; saveLead(Object.assign({stage:'probe',ts:Date.now()}, self.lead)); self.next(); };
    if(p.type==='text'){ $('q-probe-next').onclick=function(){ done($('q-probe').value.trim()); }; }
    else { Array.prototype.forEach.call(this.root.querySelectorAll('.q-choice'),function(b){ b.onclick=function(){ done(p.choices[parseInt(b.dataset.i,10)]); }; }); }
  };

  TJQuiz.prototype.renderProfile = function(){
    var self=this; this._pIdx=0;
    var step=function(){
      var P=window.MARKETING_PROFILE; var q=P.questions[self._pIdx];
      if(!q){ self._profileDone=true; saveLead(Object.assign({stage:'profile',ts:Date.now()}, self.lead)); return self.next(); }
      self.shell('<span class="q-eyebrow">Marketing check · '+(self._pIdx+1)+' of 6</span><h2 class="q-question">'+esc(q.q)+'</h2>'+
        '<div class="q-choices q-choices-tall">'+q.choices.map(function(c,i){return '<button class="q-choice" data-i="'+i+'">'+esc(c)+'</button>';}).join('')+'</div>',{hideProgress:true});
      Array.prototype.forEach.call(self.root.querySelectorAll('.q-choice'),function(b){ b.onclick=function(){ self.lead.profile[q.id]=q.choices[parseInt(b.dataset.i,10)]; self._pIdx++; step(); }; });
    };
    // brief intro then first question
    this.shell('<span class="q-eyebrow">Halfway — nice work!</span><h2 class="q-question">'+esc(window.MARKETING_PROFILE.intro)+'</h2><button class="q-btn q-btn-lg" id="q-profile-go">Let\'s do it →</button>',{hideProgress:true});
    $('q-profile-go').onclick=step;
  };

  TJQuiz.prototype.renderFinalAsk = function(){
    var F=window.FINAL_ASK; var self=this;
    this.shell('<span class="q-eyebrow">Last one before your score</span><h2 class="q-question">'+esc(F.headline)+'</h2>'+
      '<p class="q-lede">'+esc(F.body)+'</p>'+
      '<div class="q-form" id="q-callform" hidden>'+
        '<input class="q-input" id="q-phone" placeholder="'+esc(F.phoneLabel)+'" inputmode="tel" />'+
        '<input class="q-input" id="q-time" placeholder="'+esc(F.timeLabel)+' (e.g. weekday mornings)" />'+
        '<button class="q-btn q-btn-lg" id="q-call-yes">Book my call →</button>'+
      '</div>'+
      '<div class="q-form">'+
        '<button class="q-btn q-btn-lg" id="q-yes">'+esc(F.yes)+'</button>'+
        '<button class="q-btn q-btn-ghost" id="q-no">'+esc(F.no)+'</button>'+
      '</div>',{hideProgress:true});
    $('q-yes').onclick=function(){ $('q-callform').hidden=false; $('q-yes').closest('.q-form').style.display='none'; };
    $('q-no').onclick=function(){ self.finish(); };
    $('q-call-yes').onclick=function(){ self.lead.callOptIn=true; self.lead.phone=$('q-phone').value.trim(); self.lead.callTime=$('q-time').value.trim(); saveLead(Object.assign({stage:'call-optin',ts:Date.now()}, self.lead)); self.finish(); };
  };

  TJQuiz.prototype.finish = function(){
    var entry={ name:this.lead.name||'Anonymous', city:this.lead.city||'', trade:this.slug, tradeName:this.meta.name, avatar:this.lead.avatar||'🔨', score:this.score, correct:this.correct, ts:Date.now() };
    saveScore(entry);
    saveLead(Object.assign({stage:'finished',ts:Date.now()}, this.lead, {score:this.score, correct:this.correct}));
    var pct=Math.round((this.correct/CFG.totalTrivia)*100);
    var rank='Apprentice'; if(pct>=90)rank='Master Tradesman'; else if(pct>=75)rank='Journeyman'; else if(pct>=50)rank='Hand';
    this.root.innerHTML='<div class="q-card q-center">'+
      '<span class="q-eyebrow">Challenge complete</span>'+
      '<div class="q-scorebig">'+this.score.toLocaleString()+'</div>'+
      '<div class="q-scoresub">'+this.correct+' of '+CFG.totalTrivia+' correct · Rank: <b>'+rank+'</b></div>'+
      (this.lead.callOptIn?'<p class="q-lede">🤝 We\'ll be in touch soon to talk through your goals. Thanks, '+esc(this.lead.name||'')+'!</p>':'<p class="q-lede">Nice work, '+esc(this.lead.name||'friend')+'! Want us to help your real business score this high with customers?</p>')+
      '<div class="q-form">'+
        '<a class="q-btn q-btn-lg" href="quiz-leaderboard.html">See the leaderboard 🏆</a>'+
        '<a class="q-btn q-btn-ghost" href="contact.html">Talk to Toughjobs →</a>'+
        '<a class="q-link" href="quiz.html?trade='+encodeURIComponent(this.slug)+'">Play again</a>'+
      '</div>'+
    '</div>';
  };

  window.TJQuiz=TJQuiz;
})();