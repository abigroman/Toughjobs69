// Toughjobs Leads — inbound lead store (Business Assessment + email gate) with a
// real cross-device database when configured, falling back to this-device
// localStorage otherwise. Same shape/behaviour as quiz-store.js.
//
// ── TO GO LIVE WITH SHARED LEADS (free, ~5 min) ──────────────────────────
// 1. Create a free project at https://console.firebase.google.com — OR reuse
//    the project you already created for the quiz (quiz-store.js). The same
//    Realtime Database URL works for both; you only need to open one more path.
// 2. Build → Realtime Database → Rules, add the "assessment_leads" path
//    alongside whatever's already there for the quiz:
//      {
//        "rules": {
//          "assessment_leads": { ".write": true }
//          // Only add ".read": true too if you want the CRM Leads screen
//          // to pull these rows live. It makes lead rows (names, emails,
//          // answers) readable by anyone who has the database URL, so skip
//          // it if you'd rather read them in the Firebase console instead.
//        }
//      }
// 3. Project settings (gear icon, top left) → General → scroll to your web
//    app → copy the Realtime Database URL below (same one used in
//    quiz-store.js if you're reusing that project).
window.LEADS_DB = {
  url: "https://toughjobs-quiz-default-rtdb.firebaseio.com"
};
// ─────────────────────────────────────────────────────────────────────────

(function(){
  var LEAD_KEY='tj-assessment-leads';
  var DB=window.LEADS_DB, live = DB && DB.url;

  function toArray(obj){ return obj ? Object.keys(obj).map(function(k){ return obj[k]; }) : []; }

  var Store = {
    live: !!live,
    // returns a Promise<array of lead objects> newest first
    async getLeads(){
      if(live){
        try{
          var r=await fetch(DB.url+'/assessment_leads.json');
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
        try{ await fetch(DB.url+'/assessment_leads.json',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.assign({},lead,{ts:lead.ts||new Date().toISOString()}))}); }catch(e){}
      }
      try{ var all=JSON.parse(localStorage.getItem(LEAD_KEY)||'[]'); all.push(lead); localStorage.setItem(LEAD_KEY,JSON.stringify(all.slice(-200))); }catch(e){}
    }
  };
  window.LeadsStore=Store;
})();
