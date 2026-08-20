(function(){
  if (document.getElementById('tj-chat-launcher')) return;

  var css = document.createElement('style');
  css.textContent = [
    '#tj-chat-launcher{position:fixed;right:24px;bottom:24px;z-index:9998;',
      'display:flex;align-items:center;gap:12px;background:#12182a;',
      'border:1px solid rgba(255,255,255,.14);border-radius:14px;',
      'padding:10px 18px 10px 10px;box-shadow:0 12px 30px rgba(0,0,0,.45);',
      'text-decoration:none;font-family:"Archivo",sans-serif;cursor:pointer;white-space:nowrap;',
      'transition:transform .18s ease, box-shadow .18s ease;}',
    '#tj-chat-launcher:hover{transform:translateY(-3px);box-shadow:0 18px 38px rgba(0,0,0,.55);}',
    '#tj-chat-launcher .tj-cl-ic{width:38px;height:38px;border-radius:50%;background:#C8262A;',
      'display:flex;align-items:center;justify-content:center;flex-shrink:0;}',
    '#tj-chat-launcher .tj-cl-ic svg{width:19px;height:19px;stroke:#fff;fill:none;stroke-width:2;}',
    '#tj-chat-launcher .tj-cl-txt b{display:block;font-family:"Archivo Black",sans-serif;color:#fff;',
      'font-size:12px;text-transform:uppercase;letter-spacing:.01em;line-height:1.2;}',
    '#tj-chat-launcher .tj-cl-txt small{color:#9aa3b8;font-size:11px;font-weight:600;}',
    '@media(max-width:480px){#tj-chat-launcher .tj-cl-txt{display:none;}',
      '#tj-chat-launcher{padding:10px;gap:0;}}'
  ].join('');
  document.head.appendChild(css);

  var a = document.createElement('a');
  a.id = 'tj-chat-launcher';
  a.href = 'assistant.html';
  a.addEventListener('click', function(){
    try{ sessionStorage.setItem('tj-chat-return', location.href); }catch(e){}
  });
  a.setAttribute('aria-label', 'Chat with the Toughjobs AI Assistant');
  a.innerHTML =
    '<span class="tj-cl-ic"><svg viewBox="0 0 24 24" stroke-linecap="round"><path d="M12 2a5 5 0 015 5v1a5 5 0 01-10 0V7a5 5 0 015-5z"/><path d="M4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1"/></svg></span>' +
    '<span class="tj-cl-txt"><b>Ask Toughjobs</b><small>Get instant answers</small></span>';

  document.body.appendChild(a);
})();
