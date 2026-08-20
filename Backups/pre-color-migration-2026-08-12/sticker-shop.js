(function(){
function init(){
var ITEMS=[
 {id:"diecut",name:"Die-Cut Logo Stickers",use:"Handouts, bumpers, water bottles",size:'3" custom shape',packs:[["100","$55"],["250","$95"],["500","$150"],["1,000","$240"]]},
 {id:"hardhat",name:"Hard Hat Stickers",use:"Crew IDs, safety certs, morale",size:'2" round or shield',packs:[["100","$45"],["250","$75"],["500","$120"]]},
 {id:"servicedby",name:'"Serviced By" Labels',use:"Furnaces, water heaters, panels — with date grid",size:'3" × 2" rectangle',packs:[["250","$85"],["500","$135"],["1,000","$210"]]},
 {id:"toolbox",name:"Toolbox & Equipment Decals",use:"Job boxes, ladders, compressors",size:'4" × 4" heavy laminate',packs:[["100","$65"],["250","$110"],["500","$175"]]},
 {id:"windowcling",name:"Window Clings",use:"Customer windows after install — no adhesive",size:'4" round static cling',packs:[["100","$70"],["250","$120"],["500","$190"]]},
 {id:"bumper",name:"Bumper Stickers",use:"Customer + crew vehicles",size:'7.5" × 3.75"',packs:[["100","$75"],["250","$130"],["500","$205"]]},
 {id:"qr",name:"QR Review Stickers",use:'"How did we do? Scan to review" — leave-behinds',size:'2.5" square with your QR',packs:[["250","$90"],["500","$145"],["1,000","$230"]]},
 {id:"vehicle",name:"Vehicle Door Decals",use:"DOT numbers, phone + logo for trucks",size:'12" × 12" cut vinyl, pair',packs:[["2","$85"],["4","$150"],["10","$330"]]},
 {id:"sheet",name:"Kiss-Cut Sticker Sheets",use:"Multi-sticker giveaway sheets for customers & kids",size:'5" × 7" sheet, 4-6 stickers',packs:[["100","$95"],["250","$180"],["500","$300"]]},
 {id:"box",name:"Packaging & Box Seals",use:"Parts shipments, invoices, estimate folders",size:'2" round logo seal',packs:[["250","$60"],["500","$95"],["1,000","$150"]]},
 {id:"floor",name:"Floor & Safety Decals",use:"Shop floors, showrooms, anti-slip laminate",size:'12" round anti-slip',packs:[["10","$95"],["25","$190"],["50","$320"]]},
 {id:"magnet",name:"Vehicle Magnets",use:"Removable branding for personal trucks",size:'18" × 12" pair, 30-mil',packs:[["2","$70"],["4","$125"],["10","$270"]]}
];
function money(s){return parseFloat(s.replace(/[$,]/g,''));}
var cart={};
var root=document.getElementById('stickerShop');
if(!root)return;
root.innerHTML='<div class="shop-grid">'+ITEMS.map(function(it){
  return '<div class="shop-card" data-id="'+it.id+'">'
   +'<h3>'+it.name+'</h3><p class="use">'+it.use+'</p><p class="size">'+it.size+'</p>'
   +'<div class="packs">'+it.packs.map(function(p,i){return '<button class="pk'+(i===0?' active':'')+'" data-i="'+i+'">'+p[0]+'<b>'+p[1]+'</b></button>';}).join('')+'</div>'
   +'<button class="add">Add to order</button>'
  +'</div>';
}).join('')+'</div>'
+'<div class="shop-cart"><h3>Your sticker order</h3><div class="cart-rows" id="cartRows"><p class="empty">Nothing yet — add packs above.</p></div>'
+'<div class="cart-foot"><span>Estimated total</span><b id="cartTotal">$0</b></div>'
+'<p class="cart-note">Prices include design tweaks and full-color print. Final quote confirmed before anything prints.</p>'
+'<a class="btn" id="cartCta" href="contact.html">Request this order &rarr;</a></div>';

function renderCart(){
  var rows=document.getElementById('cartRows'),tot=0,html='';
  Object.keys(cart).forEach(function(k){
    var c=cart[k],it=ITEMS.find(function(x){return x.id===k;});
    var p=it.packs[c.pack];tot+=money(p[1])*c.qty;
    html+='<div class="cart-row"><span class="n">'+it.name+' <em>('+p[0]+')</em></span>'
     +'<span class="q"><button data-id="'+k+'" data-d="-1">&minus;</button>'+c.qty+'<button data-id="'+k+'" data-d="1">+</button></span>'
     +'<span class="p">$'+(money(p[1])*c.qty).toLocaleString()+'</span></div>';
  });
  rows.innerHTML=html||'<p class="empty">Nothing yet — add packs above.</p>';
  document.getElementById('cartTotal').textContent='$'+tot.toLocaleString();
  rows.querySelectorAll('button').forEach(function(b){
    b.addEventListener('click',function(){
      var id=b.getAttribute('data-id');cart[id].qty+=parseInt(b.getAttribute('data-d'),10);
      if(cart[id].qty<1)delete cart[id];renderCart();
    });
  });
}
root.querySelectorAll('.shop-card').forEach(function(card){
  var id=card.getAttribute('data-id');
  card.querySelectorAll('.pk').forEach(function(b){
    b.addEventListener('click',function(){
      card.querySelectorAll('.pk').forEach(function(x){x.classList.remove('active');});
      b.classList.add('active');
      if(cart[id]){cart[id].pack=parseInt(b.getAttribute('data-i'),10);renderCart();}
    });
  });
  card.querySelector('.add').addEventListener('click',function(){
    var pk=parseInt(card.querySelector('.pk.active').getAttribute('data-i'),10);
    if(cart[id]&&cart[id].pack===pk)cart[id].qty++;else cart[id]={pack:pk,qty:cart[id]?cart[id].qty+1:1};
    renderCart();
  });
});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
