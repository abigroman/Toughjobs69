(function(){
  var id=window.__BUNDLE_ID;
  var all=window.TJ_BUNDLE_DETAILS||[];
  var b=all.find(function(x){return x.id===id;});
  if(!b)return;
  document.title="Toughjobs — "+b.name+" Bundle";
  var others=all.filter(function(x){return x.id!==id;});
  var up=window.TJ_BUNDLE_UPSELLS||{apparel:[],services:[]};
  var root=document.getElementById('itemRoot');
  root.innerHTML=
  '<section class="bg-dark hero"><div class="tex tex-grid"></div><div class="container">'
    +'<div class="hero-text" style="max-width:860px">'
    +'<a class="backlink" href="print-samples.html">&larr; Back to sample kits</a>'
    +'<span class="eyebrow accent reveal">Bundle &middot; Print</span>'
    +'<h1 class="display reveal d1" style="color:#fff">'+b.name+'</h1>'
    +'<p class="lede reveal d2">'+b.tagline+'</p>'
    +'<div class="kit-price-row reveal d2"><span class="kp-solo"><s>'+b.solo+'</s></span><span class="kp-big">'+b.price+'</span><span class="bsave">'+b.save+'</span></div>'
    +'<div class="reveal d3"><a class="btn" href="contact.html">Get this bundle &rarr;</a></div>'
    +'</div>'
  +'</div></section>'
  +'<section class="bg-light"><div class="tex tex-dots-d"></div><div class="container">'
    +'<div class="head"><span class="eyebrow">What\'s inside</span><h2 class="display">Every piece,<br><span style="color:var(--red)">in your hands.</span></h2></div>'
    +'<div class="piece-grid">'+b.pieces.map(function(pc){
      return '<a class="pieceb" href="'+pc.kit+'"><div class="pb-frame"><image-slot id="'+pc.slot+'" shape="rect" placeholder="Sample: '+pc.name+'"></image-slot></div>'
        +'<div class="pb-body"><span class="pb-name">'+pc.name+'</span><span class="pb-desc">'+pc.desc+'</span><span class="pb-price">'+pc.price+' solo &middot; included</span></div></a>';
    }).join('')+'</div>'
    +'<p class="turn" style="margin-top:18px">Every piece uses the same logo, colors and phone number — one proof approves the whole set. Decoration and additional charges depend on artwork, print size, number of colors, placement and quantity.</p>'
  +'</div></section>'
  +'<section class="bg-navy"><div class="tex tex-dots"></div><div class="container">'
    +'<div class="head"><span class="eyebrow">Upsell &middot; Apparel</span><h2 class="display" style="color:#fff">Put the same brand<br><span style="color:var(--red)">on your crew.</span></h2></div>'
    +'<div class="up-grid">'+up.apparel.map(function(a){
      return '<a class="upc" href="'+a.href+'"><img src="'+a.img+'" alt="'+a.name+'" loading="lazy" /><span>'+a.name+'</span></a>';
    }).join('')+'</div>'
    +'<p class="bundle-lede" style="margin-top:18px">Add apparel to any print bundle and we\'ll match colors and logo placement across everything — <a href="clothing-apparel.html" style="color:#fff;font-weight:700">see all 12 apparel items &rarr;</a></p>'
  +'</div></section>'
  +'<section class="bg-light"><div class="tex tex-dots-d"></div><div class="container">'
    +'<div class="head"><span class="eyebrow">Upsell &middot; Services</span><h2 class="display">Print gets you seen.<br><span style="color:var(--red)">These get you found.</span></h2></div>'
    +'<div class="svc-grid">'+up.services.map(function(s){
      return '<a class="svcup" href="'+s.href+'"><span class="mn">'+s.name+'</span><span class="sd">'+s.desc+'</span><span class="ga">Learn more &rarr;</span></a>';
    }).join('')+'</div>'
  +'</div></section>'
  +'<section class="bg-navy"><div class="tex tex-dots"></div><div class="container">'
    +'<h2 class="kh" style="color:#fff">Other bundles</h2>'
    +'<div class="bundle-grid" style="grid-template-columns:repeat(2,1fr);max-width:760px">'+others.map(function(o){
      return '<a class="bundle" style="text-decoration:none" href="'+o.page+'"><h3>'+o.name+'</h3><p class="bi">'+o.tagline+'</p>'
      +'<p class="bp"><s>'+o.solo+'</s> <span class="bnow">'+o.price+'</span></p><span class="bsave">'+o.save+'</span></a>';
    }).join('')+'</div>'
  +'</div></section>';
})();
