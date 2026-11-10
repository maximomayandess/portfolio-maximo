(() => {
  const theme=document.getElementById('theme');
  const copy=document.getElementById('copy');
  const toast=document.getElementById('toast');
  const year=document.getElementById('year');
  year.textContent=new Date().getFullYear();
  try { if(localStorage.getItem('maximo-theme')==='alt') document.body.classList.add('alt'); } catch(e){}
  theme.addEventListener('click',()=>{
    document.body.classList.toggle('alt');
    try{localStorage.setItem('maximo-theme',document.body.classList.contains('alt')?'alt':'normal')}catch(e){}
    notify('¡Paleta cambiada!');
  });
  let timeout;
  function notify(t){toast.textContent=t;toast.classList.add('show');clearTimeout(timeout);timeout=setTimeout(()=>toast.classList.remove('show'),2400)}
  copy.addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(location.href);notify('Enlace copiado al portapapeles')}catch(e){notify('Copiá la dirección desde la barra del navegador')}
  });
})();
