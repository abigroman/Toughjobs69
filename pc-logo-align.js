(function(){
  function align(){
    var wide = window.matchMedia('(min-width:1241px)').matches;
    document.querySelectorAll('.pc-headrow').forEach(function(row){
      var h2 = row.querySelector('h2'), slot = row.querySelector('.pc-logo-slot');
      if(!h2 || !slot) return;
      var img = slot.querySelector('img');
      if(!wide){ slot.style.paddingTop = ''; return; }
      slot.style.paddingTop = '0px';
      var r = row.getBoundingClientRect(), t = h2.getBoundingClientRect();
      var ih = img.getBoundingClientRect().height || img.offsetHeight;
      var center = (t.top + t.height/2) - r.top;
      slot.style.paddingTop = Math.max(0, center - ih/2) + 'px';
    });
  }
  window.addEventListener('load', align);
  window.addEventListener('resize', align);
  document.addEventListener('DOMContentLoaded', align);
  setTimeout(align, 400);
})();
