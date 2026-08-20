(function(){
  var id=window.__KIT_ID;
  var items=window.TJ_PRINT_ITEMS||[];
  var p=items.find(function(x){return x.id===id;});
  if(!p)return;
  document.title="Toughjobs — "+p.name;
  var others=items.filter(function(x){return x.id!==id;});
  var root=document.getElementById('itemRoot');
  root.innerHTML=
  '<section class="bg-dark hero"><div class="tex tex-grid"></div><div class="container">'
    +'<div class="hero-text" style="max-width:860px">'
    +'<a class="backlink" href="print-samples.html">&larr; Back to sample kits</a>'
    +'<span class="eyebrow accent reveal">Brand Kit &middot; Print</span>'
    +'<h1 class="display reveal d1" style="color:#fff">'+p.name+'</h1>'
    +'<p class="lede reveal d2">'+p.blurb+'</p>'
    +'<div class="kit-price-row reveal d2"><span class="kp-big">'+p.price+'</span><span class="kp-unit">'+p.unit+'</span></div>'
    +'<div class="reveal d3"><a class="btn" href="contact.html">Get a quote &rarr;</a></div>'
    +'</div>'
  +'</div></section>'
  +'<section class="bg-light"><div class="tex tex-dots-d"></div><div class="container">'
    +'<div class="two-col-kit">'
    +'<div><h2 class="kh">What you get</h2><ul class="spec-ul">'+p.specs.map(function(s){return '<li>'+s+'</li>';}).join('')+'</ul>'
    +'<p class="turn"><b>Turnaround:</b> '+p.turnaround+' from proof approval.</p>'
    +'<p class="turn" style="margin-top:6px">Decoration and additional charges depend on artwork, print size, number of colors, placement and quantity.</p></div>'
    +'<div><h2 class="kh">Volume pricing</h2>'
    +'<table class="tier-tbl"><tr><th>Quantity</th><th>Price</th><th>Discount</th></tr>'
    +p.tiers.map(function(t){return '<tr><td>'+t[0]+'</td><td class="tp">'+t[1]+'</td><td class="td">'+t[2]+'</td></tr>';}).join('')
    +'</table><p class="turn">Need more than the top tier? <a href="contact.html" style="color:var(--red);font-weight:700">Call for contract pricing</a>.</p></div>'
    +'</div>'
  +'</div></section>'
  +'<section class="bg-navy"><div class="tex tex-dots"></div><div class="container">'
    +'<div class="head"><span class="eyebrow">Bundle &amp; save</span><h2 class="display" style="color:#fff">Better together.<br><span style="color:var(--red)">Bundled pricing.</span></h2></div>'
    +'<p class="bundle-lede">Matching pieces reinforce each other — the card in their hand matches the sign in the yard. Bundles beat piece-by-piece pricing every time.</p>'
    +'<div class="bundle-grid">'
    +(window.TJ_PRINT_BUNDLES||[]).map(function(b){
      var pg={'Starter Kit':'bundle-starter-kit.html','Street Sweeper':'bundle-street-sweeper.html','Full Brand Kit':'bundle-full-brand-kit.html'}[b.name]||'contact.html';
      return '<div class="bundle"><h3><a href="'+pg+'" style="color:inherit;text-decoration:none">'+b.name+'</a></h3><p class="bi">'+b.items+'</p>'
        +'<p class="bp"><s>'+b.solo+'</s> <span class="bnow">'+b.price+'</span></p>'
        +'<span class="bsave">'+b.save+'</span>'
        +'<a class="btn bbtn" href="'+pg+'">See this bundle &rarr;</a></div>';
    }).join('')
    +'</div>'
  +'</div></section>'
  +'<section class="bg-light"><div class="tex tex-dots-d"></div><div class="container">'
    +'<h2 class="kh">More from the Brand Kit</h2>'
    +'<div class="more-grid">'+others.map(function(o){
      return '<a class="more" href="'+o.page+'"><span class="mn">'+o.name+'</span><span class="mp">'+o.price+' '+o.unit+'</span></a>';
    }).join('')+'</div>'
  +'</div></section>';
})();
