/* Quiz peek — plumber rises ~3in from bottom (slow, stops before legs), then a
   comic speech-bubble image materializes over 1s at top-right. Hides after 10s,
   returns after 30s of inactivity. Everything reverses at the same speed. */
(function(){
  if(window.__tjQuizPeek)return;window.__tjQuizPeek=true;
  var css=document.createElement('style');
  css.textContent='.tj-peek{position:fixed;left:76px;bottom:0;z-index:70;pointer-events:none;transform:translateY(100%);transition:transform 4.7s cubic-bezier(.33,1,.68,1)}'
  +'.tj-peek.up{transform:translateY(calc(100% - 288px))}'
  +'.tj-peek .fig{position:relative;pointer-events:auto}'
  +'.tj-peek img.plumber{display:block;width:210px;height:auto;filter:drop-shadow(0 -6px 24px rgba(0,0,0,.35))}'
  +'.tj-peek .bub{position:absolute;left:140px;bottom:460px;width:230px;pointer-events:auto;opacity:0;transform:scale(.85);transition:opacity 1s ease,transform 1s ease;cursor:pointer;z-index:3}'
  +'.tj-peek.bubin .bub{opacity:1;transform:scale(1)}'
  +'.tj-peek .bub img{display:block;width:100%;height:auto;filter:drop-shadow(3px 3px 0 rgba(10,15,28,.35))}'
  +'.tj-peek .x{position:absolute;top:-6px;right:-6px;width:28px;height:28px;border:2px solid #0A0F1C;background:#fff;border-radius:50%;font-size:16px;line-height:1;cursor:pointer;color:#0A0F1C;padding:0;z-index:4}'
  +'.tj-peek .x:focus-visible,.tj-peek .bub a:focus-visible{outline:3px solid #fff;outline-offset:3px}'
  +'@media(min-width:641px) and (max-width:1024px){.tj-peek.up{transform:translateY(calc(100% - clamp(360px,48vh,440px)))}}'
  +'@media(max-width:640px){.tj-peek{display:none!important}}'
  +'@media(prefers-reduced-motion:reduce){.tj-peek,.tj-peek .bub{transition-duration:.01ms!important}}';
  document.head.appendChild(css);
  var el=document.createElement('div');
  el.className='tj-peek';el.setAttribute('aria-live','polite');
  el.innerHTML='<div class="fig">'
  +'<div class="bub"><a href="quiz-hub.html" aria-label="Take the trades quiz"><img src="uploads/bubble-text.webp" alt="How tough are you? Take our trades quiz and compete with others in your field. Check out our leaderboard." /></a><button class="x" type="button" aria-label="Dismiss quiz invitation">&times;</button></div>'
  +'<img class="plumber" src="uploads/plumbing.webp" alt="Toughjobs plumber" />'
  +'</div>';
  document.body.appendChild(el);
  var hideT=null,idleT=null,bubT=null,dismissed=false;
  function show(){
    if(dismissed)return;
    el.classList.add('up');
    clearTimeout(bubT);
    bubT=setTimeout(function(){el.classList.add('bubin');},4700); /* bubble in after rise finishes */
    clearTimeout(hideT);
    hideT=setTimeout(hide,15000); /* ~4.7s rise + 10s visible */
  }
  function hide(){
    el.classList.remove('bubin');
    el.classList.remove('up');
    armIdle();
  }
  function armIdle(){clearTimeout(idleT);if(!dismissed)idleT=setTimeout(show,120000);}
  function activity(){if(!el.classList.contains('up'))armIdle();}
  ['scroll','mousemove','keydown','touchstart','click'].forEach(function(ev){window.addEventListener(ev,activity,{passive:true});});
  el.querySelector('.x').addEventListener('click',function(e){
    e.preventDefault();dismissed=true;clearTimeout(hideT);clearTimeout(idleT);clearTimeout(bubT);
    el.classList.remove('bubin');el.classList.remove('up');
  });
  setTimeout(show,3000);
})();
