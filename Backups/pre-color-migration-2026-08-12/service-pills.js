/* service-pills.js — injects the trade-style service pill row below the hero. */
(function(){
  var S=[["websites.html","Websites"],["seo.html","SEO"],["local-seo.html","Local SEO"],["paid-ads.html","Paid Ads"],["branding.html","Branding"],["social-media.html","Social"],["reviews.html","Reviews"],["print-collateral.html","Print"],["clothing-apparel.html","Apparel"],["software.html","Software"],["ai-automations.html","AI Automations"],["database-reactivation.html","Re-Marketing"],["coaching.html","Coaching"],["llc-filing.html","LLC Filing"]];
  function init(){
    var hero=document.querySelector("body.sp .hero");
    if(!hero||document.querySelector(".service-pill-row"))return;
    var here=(location.pathname.split("/").pop()||"").toLowerCase();
    var row=document.createElement("div");row.className="service-pill-row";
    var c=document.createElement("div");c.className="container";
    S.forEach(function(s){
      var a=document.createElement("a");
      a.className="service-pill"+(s[0]===here?" is-current":"");
      a.href=s[0];a.textContent=s[1];c.appendChild(a);
    });
    row.appendChild(c);hero.parentNode.insertBefore(row,hero.nextSibling);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
