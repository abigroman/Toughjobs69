// Toughjobs Quiz — score/lead store with a real cross-user database when
// configured, falling back to this-device localStorage otherwise.
//
// ── TO GO LIVE WITH A SHARED LEADERBOARD (free, ~5 min) ──────────────────
// 1. Create a free project at https://supabase.com
// 2. In the SQL editor, run:
//      create table scores (
//        id bigint generated always as identity primary key,
//        name text, city text, trade text, trade_name text,
//        avatar text, score int, correct int, created_at timestamptz default now()
//      );
//      create table leads (
//        id bigint generated always as identity primary key,
//        payload jsonb, created_at timestamptz default now()
//      );
//      alter table scores enable row level security;
//      alter table leads  enable row level security;
//      create policy "public read"  on scores for select using (true);
//      create policy "public write" on scores for insert with check (true);
//      create policy "lead write"   on leads  for insert with check (true);
// 3. Settings → API: copy the Project URL and the anon public key below.
window.QUIZ_DB = {
  url: "",   // e.g. "https://xrhugklmeglshsaugxvq.supabase.co/rest/v1/"
  key: ""    // "xrhugklmeglshsaugxvq"
};
// ─────────────────────────────────────────────────────────────────────────

(function(){
  var LB_KEY='tj-quiz-leaderboard', LEAD_KEY='tj-quiz-leads';
  var DB=window.QUIZ_DB, live = DB && DB.url && DB.key;
  function headers(){ return { 'apikey':DB.key, 'Authorization':'Bearer '+DB.key, 'Content-Type':'application/json', 'Prefer':'return=minimal' }; }

  var Store = {
    live: !!live,
    // returns a Promise<array of score entries> sorted desc
    async getScores(){
      if(live){
        try{
          var r=await fetch(DB.url+'/rest/v1/scores?select=*&order=score.desc&limit=200',{headers:headers()});
          if(r.ok){ var rows=await r.json(); return rows.map(function(e){ return {name:e.name,city:e.city,trade:e.trade,tradeName:e.trade_name,avatar:e.avatar,score:e.score,correct:e.correct,ts:e.created_at}; }); }
        }catch(e){}
      }
      try{ return JSON.parse(localStorage.getItem(LB_KEY)||'[]'); }catch(e){ return []; }
    },
    async addScore(entry){
      if(live){
        try{ await fetch(DB.url+'/rest/v1/scores',{method:'POST',headers:headers(),body:JSON.stringify({name:entry.name,city:entry.city,trade:entry.trade,trade_name:entry.tradeName,avatar:entry.avatar,score:entry.score,correct:entry.correct})}); }catch(e){}
      }
      try{ var all=JSON.parse(localStorage.getItem(LB_KEY)||'[]'); all.push(entry); all.sort(function(a,b){return b.score-a.score;}); localStorage.setItem(LB_KEY,JSON.stringify(all.slice(0,200))); }catch(e){}
    },
    async addLead(lead){
      if(live){
        try{ await fetch(DB.url+'/rest/v1/leads',{method:'POST',headers:headers(),body:JSON.stringify({payload:lead})}); }catch(e){}
      }
      try{ var all=JSON.parse(localStorage.getItem(LEAD_KEY)||'[]'); all.push(lead); localStorage.setItem(LEAD_KEY,JSON.stringify(all)); }catch(e){}
    }
  };
  window.QuizStore=Store;
})();