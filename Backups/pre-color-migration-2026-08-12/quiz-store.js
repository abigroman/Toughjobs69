// Toughjobs Quiz — score/lead store with a real cross-user database when
// configured, falling back to this-device localStorage otherwise.
//
// ── TO GO LIVE WITH A SHARED LEADERBOARD (free, ~5 min) ──────────────────
// 1. Create a free project at https://console.firebase.google.com
// 2. Build → Realtime Database → Create Database → start in **locked mode**,
//    then open the Rules tab and paste this (scopes public access to only
//    the two paths this file uses, instead of the whole database):
//      {
//        "rules": {
//          "scores": { ".read": true, ".write": true },
//          "leads":  { ".write": true }
//          // Only add "leads": {".read": true} too if you want the CRM
//          // Leads screen to pull quiz leads live. That makes lead rows
//          // readable by anyone who has the database URL, so skip it if
//          // you'd rather read them in the Firebase console instead.
//        }
//      }
// 3. Project settings (gear icon, top left) → General → scroll to your web
//    app → copy the Realtime Database URL below (looks like
//    "https://PROJECT-ID-default-rtdb.firebaseio.com").
window.QUIZ_DB = {
  url: ""   // e.g. "https://toughjobs-quiz-default-rtdb.firebaseio.com"  (no trailing slash)
};
// ─────────────────────────────────────────────────────────────────────────

(function(){
  var LB_KEY='tj-quiz-leaderboard', LEAD_KEY='tj-quiz-leads';
  var DB=window.QUIZ_DB, live = DB && DB.url;

  function toArray(obj){ return obj ? Object.keys(obj).map(function(k){ return obj[k]; }) : []; }

  var Store = {
    live: !!live,
    // returns a Promise<array of score entries> sorted desc
    async getScores(){
      if(live){
        try{
          var r=await fetch(DB.url+'/scores.json');
          if(r.ok){
            var rows=toArray(await r.json());
            rows.sort(function(a,b){ return (b.score||0)-(a.score||0); });
            return rows.slice(0,200).map(function(e){ return {name:e.name,city:e.city,trade:e.trade,tradeName:e.tradeName,avatar:e.avatar,score:e.score,correct:e.correct,ts:e.ts}; });
          }
        }catch(e){}
      }
      try{ return JSON.parse(localStorage.getItem(LB_KEY)||'[]'); }catch(e){ return []; }
    },
    async addScore(entry){
      if(live){
        try{ await fetch(DB.url+'/scores.json',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.assign({},entry,{ts:new Date().toISOString()}))}); }catch(e){}
      }
      try{ var all=JSON.parse(localStorage.getItem(LB_KEY)||'[]'); all.push(entry); all.sort(function(a,b){return b.score-a.score;}); localStorage.setItem(LB_KEY,JSON.stringify(all.slice(0,200))); }catch(e){}
    },
    // returns a Promise<array of lead payloads> newest first (read by the CRM)
    async getLeads(){
      if(live){
        try{
          var r=await fetch(DB.url+'/leads.json');
          if(r.ok){
            var rows=toArray(await r.json());
            rows.sort(function(a,b){ return new Date(b.ts||0)-new Date(a.ts||0); });
            return rows.slice(0,200);
          }
        }catch(e){}
      }
      try{ return JSON.parse(localStorage.getItem(LEAD_KEY)||'[]'); }catch(e){ return []; }
    },
    async addLead(lead){
      if(live){
        try{ await fetch(DB.url+'/leads.json',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.assign({},lead,{ts:lead.ts||new Date().toISOString()}))}); }catch(e){}
      }
      try{ var all=JSON.parse(localStorage.getItem(LEAD_KEY)||'[]'); all.push(lead); localStorage.setItem(LEAD_KEY,JSON.stringify(all)); }catch(e){}
    }
  };
  window.QuizStore=Store;
})();
