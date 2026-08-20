(function(){
  var id=window.__ITEM_ID;
  var p=(window.TJ_APPAREL||[]).find(function(x){return x.id===id;});
  var H=window.TJ_HEX||{};
  if(!p)return;
  function hex(n){return H[n]||"#cccccc";}
  var ci=p.colorImages||{};

  var META={
    "work-pants":{style:"TJ-WP100",sizes:["30","32","34","36","38","40"],chart:"pants",fit:"Standard fit — relaxed through seat and thigh"},
    "gloves":{style:"TJ-GL200",sizes:["S","M","L","XL"],chart:"gloves",fit:"Snug work fit — size up for liner gloves"},
    "baseball-hats":{style:"TJ-BH300",sizes:["One Size"],chart:"none",fit:"Adjustable closure — fits most"},
    "safari-hats":{style:"TJ-SH310",sizes:["S/M","L/XL"],chart:"none",fit:"Wide brim, adjustable chin strap"},
    "patches":{style:"TJ-PT400",sizes:['2\"','3\"','4\"'],chart:"none",fit:"Iron-on or sew-on backing"}
  };
  var m=META[id]||{style:"TJ-"+id.replace(/[^a-z0-9]/gi,"").slice(0,5).toUpperCase(),sizes:["S","M","L","XL","2XL","3XL"],chart:"tops",fit:"Standard fit — true to size"};

  var CHARTS={
    tops:{cols:["Size","Chest (in)","Length (in)"],colsCm:["Size","Chest (cm)","Length (cm)"],rows:[["S","34–36","28"],["M","38–40","29"],["L","42–44","30"],["XL","46–48","31"],["2XL","50–52","32"],["3XL","54–56","33"]]},
    pants:{cols:["Waist","Waist (in)","Inseam (in)"],colsCm:["Waist","Waist (cm)","Inseam (cm)"],rows:[["30",'30','30 / 32'],["32",'32','30 / 32'],["34",'34','30 / 32'],["36",'36','30 / 32'],["38",'38','30 / 32'],["40",'40','30 / 32']]},
    gloves:{cols:["Size","Palm circumference (in)"],colsCm:["Size","Palm circumference (cm)"],rows:[["S","7–8"],["M","8–9"],["L","9–10"],["XL","10–11"]]}
  };
  function toCm(v){return v.replace(/(\d+(?:\.\d+)?)/g,function(n){return Math.round(parseFloat(n)*2.54);});}

  var swatchRow=p.colors.map(function(c){
    var img=ci[c]?' data-img="'+ci[c]+'"':'';
    return '<li'+(ci[c]?' class="has-img"':'')+img+'><span class="dot" style="background:'+hex(c)+'"></span>'+c+'</li>';
  }).join('');
  var oosRow=p.oos.map(function(c){
    return '<li class="oos"><span class="dot" style="background:'+hex(c)+'"></span>'+c+' <span class="tag">Out of stock</span></li>';
  }).join('')+(p.oosNote?'<li class="oos-note">'+p.oosNote+'</li>':'');

  var matrixHead='<tr><th class="mx-c">Color</th>'+m.sizes.map(function(s){return '<th>'+s+'</th>';}).join('')+'<th class="mx-t">Total</th></tr>';
  var matrixRows=p.colors.map(function(c,r){
    return '<tr><td class="mx-c"><span class="dot sm" style="background:'+hex(c)+'"></span>'+c+'</td>'
      +m.sizes.map(function(s){return '<td><input type="number" min="0" inputmode="numeric" placeholder="0" data-r="'+r+'" aria-label="'+c+' '+s+'" /></td>';}).join('')
      +'<td class="mx-t" data-rt="'+r+'">0</td></tr>';
  }).join('');

  var all=window.TJ_APPAREL;
  var ups=all.filter(function(x){return x.id!==p.id;});
  var upCard=function(x){
    return '<a class="up-card" href="'+x.page+'"><div class="up-img"><img src="'+x.img+'" alt="'+x.name+'" loading="lazy" /></div>'
      +'<div class="up-body"><span class="up-name">'+x.name+'</span><span class="up-price">'+x.price+'</span><span class="up-cta">View product &rarr;</span></div></a>';
  };
  var upsHtml=ups.map(upCard).join('')+ups.map(upCard).join('');

  var chart=CHARTS[m.chart];

  var PATCHES=[
    {n:"3D Embroidered Patches",min:"10 pc min",cost:"~$1.75\u2013$4.50 ea",life:"5+ years",
     use:"Bold hat & jacket logos where you want the mark to pop off the fabric.",
     plus:"Raised, dimensional look reads as premium; extremely durable stitched thread.",
     minus:"Foam backing limits fine detail and small text; thicker and stiffer than flat patches."},
    {n:"Faux Leather Patches",min:"10 pc min",cost:"~$2.00\u2013$4.50 ea",life:"3\u20135 years",
     use:"Rugged heritage branding on caps, work jackets and flannels.",
     plus:"Laser-engraved leatherette gives a rich, outdoorsy premium feel.",
     minus:"Engraving is tone-on-tone \u2014 no full-color art; can crack if flexed hard over time."},
    {n:"Silicone Patches",min:"10 pc min",cost:"~$1.50\u2013$3.50 ea",life:"5+ years",
     use:"Performance and outdoor gear \u2014 softshells, rain jackets, hi-vis.",
     plus:"Waterproof, flexible and modern; won\u2019t fray, fade or absorb dirt.",
     minus:"Molded detail is limited; fewer colors per patch than printed options."},
    {n:"Chenille Patches",min:"10 pc min",cost:"~$3.00\u2013$7.00 ea",life:"5+ years",
     use:"Varsity / letterman jackets and large tactile team crests.",
     plus:"Retro fuzzy texture with big visual presence; very durable.",
     minus:"Only works for large, simple shapes \u2014 no small text or fine detail; bulky."},
    {n:"Woven Patches",min:"10 pc min",cost:"~$1.00\u2013$3.00 ea",life:"5+ years",
     use:"Detailed logos, small text and crisp multi-color marks.",
     plus:"Fine woven threads hold tiny detail; thinner and flatter than embroidery.",
     minus:"Less surface texture \u2014 flatter, less \u2018premium\u2019 hand-feel than 3D or chenille."},
    {n:"Metallic Flex Patches",min:"25 pc min",cost:"~$0.75\u2013$2.00 ea",life:"2\u20133 years",
     use:"Shiny accent marks, numbers and slim logo treatments.",
     plus:"Bright metallic finish, ultra-thin, cheap at volume; heat-pressed fast.",
     minus:"Heat-transfer wears faster than stitching; edges can lift with heavy washing."},
    {n:"Full Color Flex Patches",min:"25 pc min",cost:"~$0.75\u2013$2.00 ea",life:"2\u20133 years",
     use:"Photo-detail or gradient logos with unlimited colors.",
     plus:"Any color and fine detail; thin, lightweight and soft on the garment.",
     minus:"Colors soften over years of washing; not as rugged as woven/embroidered."},
    {n:"Matte Black Flex Patches",min:"25 pc min",cost:"~$0.60\u2013$1.50 ea",life:"2\u20133 years",
     use:"Clean, subtle monochrome branding \u2014 blackout / tonal looks.",
     plus:"Modern flat-matte finish, very low cost, thin and flexible.",
     minus:"Single color only; heat-transfer lifespan, reapply/press care needed."},
    {n:"Matte White Flex Patches",min:"25 pc min",cost:"~$0.60\u2013$1.50 ea",life:"2\u20133 years",
     use:"High-contrast single-color marks on dark garments.",
     plus:"Crisp matte white, inexpensive, thin and soft.",
     minus:"Single color only; can pick up grime on white over time."},
    {n:"Chrome Flex Patches",min:"",cost:"~$1.00\u2013$2.00 ea",life:"~2 years",
     use:"Eye-catching mirror-finish accents and premium highlights.",
     plus:"Reflective chrome look grabs attention like nothing else.",
     minus:"Most delicate finish \u2014 wash cold/inside-out; scratches and dulls fastest."},
    {n:"Custom Embroidered Name Patches",min:"",cost:"$3.50 ea",life:"5+ years",
     use:"Personalized name tags for uniforms and work shirts.",
     plus:"Classic workwear look; hard-wearing stitched thread; personalized per crew member.",
     minus:"Small area limits art; per-name setup makes them pricier than bulk logo patches."}
  ];
  var patchGuide = (id==="patches") ?
    '<section class="bg-light patch-guide"><div class="tex tex-dots-d"></div><div class="container">'
    +'<div class="head"><span class="eyebrow">Decoration guide</span><h2 class="display">Which patch is right for the job?</h2></div>'
    +'<p class="sec-sub">Every patch type has a trade-off between look, detail, durability and price. Here\u2019s how they stack up \u2014 tell us the vibe you\u2019re after and we\u2019ll spec the right one.</p>'
    +'<div class="patch-grid">'
    +PATCHES.map(function(p2){var slug=p2.n.replace(" Patches","").replace(/ /g,"-");return '<div class="patch-card" data-img="uploads/webp/patch-type-'+slug+'.webp">'
      +'<div class="pc-top"><h3>'+p2.n+'</h3>'+(p2.min?'<span class="pc-min">'+p2.min+'</span>':'')+'</div>'
      +'<div class="pc-meta"><span><b>Cost</b>'+p2.cost+'</span><span><b>Lasts</b>'+p2.life+'</span></div>'
      +'<p class="pc-use"><b>Best for:</b> '+p2.use+'</p>'
      +'<p class="pc-plus">'+p2.plus+'</p>'
      +'<p class="pc-minus">'+p2.minus+'</p>'
      +'<button class="pc-see" type="button" aria-expanded="false">See patch example <span class="pc-caret">\u25be</span></button>'
      +'<div class="pc-reveal"><img loading="lazy" alt="'+p2.n+' example" src="uploads/webp/patch-type-'+slug+'.webp" /></div>'
    +'</div>';}).join('')
    +'</div>'
    +'<p class="patch-note">Prices are ballpark per-piece at the listed minimum and drop with volume. Final pricing depends on size, detail, backing (iron-on vs. sew-on) and quantity \u2014 we\u2019ll confirm on your proof.</p>'
    +'</div></section>' : '';
  var chartHtml=chart?'<div class="chart-toggle"><button class="ct-btn active" data-u="in">Inches</button><button class="ct-btn" data-u="cm">Centimeters</button></div>'
    +'<table class="size-chart" id="sizeChart"></table>':'';

  var cuffHtml = (id==="long-sleeve-tshirts") ?
    '<section class="bg-light cuff-guide"><div class="tex tex-dots-d"></div><div class="container">'
    +'<div class="head"><span class="eyebrow">Cuff style</span><h2 class="display">Hemmed or ribbed cuffs?</h2></div>'
    +'<p class="sec-sub">Choosing between loose-sleeve and ribbed long-sleeve shirts depends on style and comfort goals. Loose sleeves offer a relaxed, breathable, casual fit, while ribbed cuffs give a form-fitting, textured, structured silhouette that layers easily. Ribbed cuffs may come with an additional charge. We will apprise you of our inventory.</p>'
    +'<div class="cuff-grid">'
      +'<div class="cuff-card"><image-slot id="cuffHemmedSlot" shape="rect" style="aspect-ratio:1/1;display:block" data-placeholder="Hemmed (loose) cuff photo"></image-slot>'
        +'<h3>Hemmed cuffs (loose sleeve)</h3>'
        +'<p><b>Fit:</b> Relaxed, baggy, or oversized through the arms and body.</p>'
        +'<p><b>Comfort:</b> Highly breathable, airy and unrestrictive.</p>'
        +'<p><b>Best for:</b> Casual streetwear, lounging, hot weather, or an effortless laid-back look.</p></div>'
      +'<div class="cuff-card"><image-slot id="cuffRibbedSlot" shape="rect" style="aspect-ratio:1/1;display:block" data-placeholder="Ribbed cuff photo"></image-slot>'
        +'<h3>Ribbed cuffs</h3>'
        +'<p><b>Fit:</b> Slim, snug and stretchy, hugging the arms and torso.</p>'
        +'<p><b>Texture:</b> Vertical knit lines add visual interest and flexibility.</p>'
        +'<p><b>Best for:</b> Layering under jackets, smart-casual outfits, cooler weather, or a clean, fitted aesthetic.</p></div>'
    +'</div>'
    +'</div></section>' : '';

  var root=document.getElementById('itemRoot');
  root.innerHTML=
  // 1 — HERO
  '<section class="bg-dark hero"><div class="tex tex-grid"></div><div class="container">'
    +'<div class="item-hero">'
      +'<div class="hero-left"><div class="sheet-wrap"><img class="item-sheet" src="'+p.img+'" alt="'+p.name+'" /></div>'
        +'<div class="color-panel"><span class="cp-h">Product colors</span><ul class="swatches">'+swatchRow+oosRow+'</ul></div>'
        +'<div class="notice"><span class="ic">!</span><p><strong>Please note:</strong> availability changes often. Some colors may not be in stock when your order is placed — we\'ll confirm availability and suggest close matches.</p></div>'
      +'</div>'
      +'<div class="item-info">'
        +'<a class="backlink" href="clothing-apparel.html">&larr; All custom apparel</a>'
        +'<h1>'+p.name+'</h1>'
        +'<p class="style-no">'+(p.mfr||('Style '+m.style))+'</p>'
        +'<span class="price">'+p.price+'</span>'
        +'<p class="price-note">Decoration and additional charges depend on artwork, print size, number of colors, placement and quantity.</p>'
        +'<p class="blurb">'+p.blurb+'</p>'
        +(p.fabric?'<ul class="spec-list"><li><b>Fabric:</b> '+p.fabric+'</li>'+(p.blank?'<li><b>Blank price:</b> '+p.blank+'</li>':'')+'</ul>':'')
        +'<p class="ship-note">We confirm stock, decoration capacity, production timing, and the delivery date before the order is approved.</p>'
        +'<div class="logo-tool">'
          +'<h3>Your logo on it</h3>'
          +'<label class="logo-drop" id="logoDrop"><input type="file" accept="image/*" id="logoFile" /><span id="logoDropTxt">Drop your logo here or <u>browse</u></span><img id="logoPrev" alt="" /></label>'
          +'<div class="opt-row"><span class="opt-lab">Method</span><div class="chips" id="methodChips"><button class="chip active">Embroidery</button><button class="chip">Screen print</button><button class="chip">DTF transfer</button><button class="chip">Patch</button></div></div>'
          +'<div class="opt-row"><span class="opt-lab">Placement</span><div class="chips" id="placeChips"><button class="chip active">Left chest</button><button class="chip">Right chest</button><button class="chip">Full back</button><button class="chip">Sleeve</button></div></div>'
          +'<div class="opt-row notes-row"><span class="opt-lab">Order notes</span><textarea id="orderNotes" class="order-notes" rows="3" placeholder="Anything we should know — exact logo placement, thread or ink colors, sizing exceptions, in-hands date, etc."></textarea></div>'
        +'</div>'
        +(id==="patches"?'<a class="btn" href="contact.html">Request a patch quote &rarr;</a>':'<a class="btn" href="#matrix" id="toMatrix">Build your bulk order &darr;</a>')
      +'</div>'
    +'</div>'
  +'</div></section>'
  +patchGuide
  // 2 — BULK MATRIX
  +(id==="patches"?'':'<section class="bg-light" id="matrix"><div class="tex tex-dots-d"></div><div class="container">'
    +'<div class="head"><span class="eyebrow">Step 2 &middot; Order breakdown</span><h2 class="display">One grid. Your whole crew.</h2></div>'
    +'<p class="sec-sub">Enter quantities per color and size — no dropdown ping-pong. Totals update as you type.</p>'
    +'<div class="mx-card"><table class="mx">'+matrixHead+matrixRows
      +'<tr class="mx-foot"><td class="mx-c">Total units</td><td colspan="'+m.sizes.length+'"></td><td class="mx-t" id="mxGrand">0</td></tr>'
    +'</table></div>'
    +'<div class="mx-bar"><div class="tier" id="tierMsg">Volume pricing kicks in at 12+ units — the more you order, the lower the per-unit price.</div>'
    +'<a class="btn" id="quoteBtn" href="contact.html">Request quote for <span id="qCount">0</span> units &rarr;</a></div>'
  +'</div></section>')
  +cuffHtml
  // 3 — SIZING & FIT
  +(id==="patches"?'<section class="bg-navy"><div class="tex tex-dots"></div><div class="container">'
    +'<div class="two-col"><div>'
      +'<h2 class="sec-h w">Sizes &amp; backing</h2>'
      +'<p class="fit-note">'+m.fit+'. Standard sizes run 2&Prime;&ndash;4&Prime; wide; larger back patches are quoted per design.</p>'
      +'<ul class="plain w"><li>Iron-on backing for quick application</li><li>Sew-on backing for maximum hold on workwear</li><li>Hook-and-loop (Velcro) backing available on request</li></ul>'
    +'</div><div>'
      +'<h2 class="sec-h w">Care &amp; longevity</h2>'
      +'<ul class="plain w">'+p.wash.map(function(w){return '<li>'+w+'</li>';}).join('')+'</ul>'
    +'</div></div>'
  +'</div></section>'
  :'<section class="bg-navy"><div class="tex tex-dots"></div><div class="container">'
    +'<div class="two-col"><div>'
      +'<h2 class="sec-h w">Sizing &amp; fit</h2>'
      +'<p class="fit-note">'+m.fit+'.</p>'+chartHtml
    +'</div><div>'
      +'<h2 class="sec-h w">Group ordering</h2>'
      +'<p class="fit-note">Don\'t chase your crew for sizes. Copy a group-order link, send it to your team, and each person submits their own size. We compile the order for you.</p>'
      +'<button class="btn ghost" id="groupLink">Copy group-order link</button>'
      +'<h2 class="sec-h w" style="margin-top:34px">How to wash &amp; care</h2>'
      +'<ul class="plain w">'+p.wash.map(function(w){return '<li>'+w+'</li>';}).join('')+'</ul>'
    +'</div></div>'
  +'</div></section>')
  // 4 — UPSELL + VALIDATION / BENEFITS
  +'<section class="bg-light"><div class="tex tex-dots-d"></div><div class="container">'
    +'<div class="head"><span class="eyebrow">Complete the kit</span><h2 class="display">Round out the uniform</h2></div>'
    +'<p class="sec-sub">Crews that order '+p.name.toLowerCase()+' usually brand these too — same logo, same proof, one delivery.</p>'
    +'<div class="upsell-carousel" aria-label="More products"><div class="upsell-track">'+upsHtml+'</div></div>'
    +'<div class="head" style="margin-top:70px"><span class="eyebrow">Why order through Toughjobs</span><h2 class="display">Built for bulk. Priced for crews.</h2></div>'
    +'<div class="bene-grid">'
      +'<div class="bene"><h3>Volume pricing</h3><p>Tiered discounts at 12, 48 and 144 units. Mix colors and sizes — the whole order counts toward your tier.</p></div>'
      +'<div class="bene"><h3>Decorated turnaround</h3><p>The production and delivery timeline is confirmed after stock, decoration method, quantity, proof approval, and destination are known.</p></div>'
      +'<div class="bene"><h3>Spec &amp; compliance</h3><p>'+(p.fabric||p.materials.join(', '))+'. Moisture-wicking and hi-vis safety options available on request.</p></div>'
      +'<div class="bene"><h3>One point of contact</h3><p>We handle art, proofs, production and delivery. You approve a proof before anything is printed or stitched.</p></div>'
    +'</div>'
    +'<div class="bene-grid"><div class="bene"><h3>Before approval</h3><p>Check product, color, size counts, artwork, placement, delivery address, and in-hands date on the final proof.</p></div><div class="bene"><h3>After approval</h3><p>Keep the approved proof and order summary together so reorders begin from documented specifications.</p></div></div>'
  +'</div></section>'
  // 5 — CTA
  +'<section class="bg-accent2 ctaband"><div class="tex tex-grid"></div><div class="container">'
    +'<h2 class="display reveal">Ready to outfit the crew?</h2>'
    +'<p class="reveal d1">Send us your logo and the grid above — we\'ll confirm the product, colors, quantity, price, timeline, and production proof.</p>'
    +'<div class="reveal d2"><a class="btn" href="contact.html">Get a quote &rarr;</a> <a class="btn" href="clothing-apparel.html" style="background:var(--ink)">All apparel &rarr;</a></div>'
  +'</div></section>';

  // patch example reveal (tap toggles; hover handled by CSS on desktop)
  root.querySelectorAll('.patch-card .pc-see').forEach(function(b){
    b.addEventListener('click',function(){
      var card=b.closest('.patch-card');var open=card.classList.toggle('open');
      b.setAttribute('aria-expanded',open?'true':'false');
    });
  });

  // color swap
  var sheet=root.querySelector('.item-sheet');
  root.querySelectorAll('.swatches li.has-img').forEach(function(li){
    li.addEventListener('click',function(){
      root.querySelectorAll('.swatches li.has-img').forEach(function(x){x.classList.remove('active');});
      li.classList.add('active');sheet.src=li.getAttribute('data-img');
    });
  });

  // matrix totals
  var inputs=[].slice.call(root.querySelectorAll('.mx input'));
  function recalc(){
    var grand=0,rows={};
    inputs.forEach(function(inp){var v=parseInt(inp.value,10)||0;grand+=v;var r=inp.getAttribute('data-r');rows[r]=(rows[r]||0)+v;});
    Object.keys(rows).forEach(function(r){root.querySelector('[data-rt="'+r+'"]').textContent=rows[r];});
    root.querySelector('#mxGrand').textContent=grand;
    root.querySelector('#qCount').textContent=grand;
    var t=root.querySelector('#tierMsg');
    if(grand>=144)t.textContent="144+ units — top volume tier. Best per-unit pricing on this order.";
    else if(grand>=48)t.textContent="48+ units — mid volume tier unlocked. Add "+(144-grand)+" more for top-tier pricing.";
    else if(grand>=12)t.textContent="12+ units — volume pricing unlocked. Add "+(48-grand)+" more for the next tier.";
    else t.textContent="Volume pricing kicks in at 12+ units — the more you order, the lower the per-unit price.";
  }
  inputs.forEach(function(i){i.addEventListener('input',recalc);});

  // size chart + unit toggle
  var sc=root.querySelector('#sizeChart');
  if(sc&&chart){
    function renderChart(u){
      var cols=u==='cm'?chart.colsCm:chart.cols;
      sc.innerHTML='<tr>'+cols.map(function(c){return '<th>'+c+'</th>';}).join('')+'</tr>'
        +chart.rows.map(function(r){return '<tr>'+r.map(function(v,i){return '<td>'+(i===0||u==='in'?v:toCm(v))+'</td>';}).join('')+'</tr>';}).join('');
    }
    renderChart('in');
    root.querySelectorAll('.ct-btn').forEach(function(b){
      b.addEventListener('click',function(){
        root.querySelectorAll('.ct-btn').forEach(function(x){x.classList.remove('active');});
        b.classList.add('active');renderChart(b.getAttribute('data-u'));
      });
    });
  }

  // logo upload preview
  var lf=root.querySelector('#logoFile'),lp=root.querySelector('#logoPrev'),lt=root.querySelector('#logoDropTxt');
  if(lf)lf.addEventListener('change',function(){
    if(lf.files&&lf.files[0]){lp.src=URL.createObjectURL(lf.files[0]);lp.style.display='block';lt.textContent=lf.files[0].name+" — looks good. We'll confirm sizing on your proof.";}
  });

  // chips
  root.querySelectorAll('.chips').forEach(function(g){
    g.querySelectorAll('.chip').forEach(function(c){
      c.addEventListener('click',function(){g.querySelectorAll('.chip').forEach(function(x){x.classList.remove('active');});c.classList.add('active');});
    });
  });

  // group order link
  var gl=root.querySelector('#groupLink');
  if(gl)gl.addEventListener('click',function(){
    var url=location.origin+location.pathname+'?group-order';
    (navigator.clipboard?navigator.clipboard.writeText(url):Promise.reject()).then(function(){gl.textContent="Link copied — send it to your crew";})
      .catch(function(){gl.textContent=url;});
  });
})();
