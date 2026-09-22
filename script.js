(() => {
  const cfg = window.PORTFOLIO_CONFIG || {};
  document.getElementById('year').textContent = new Date().getFullYear();

  const git = document.querySelector('.github-link');
  const githubUrl = cfg.githubProfile || (cfg.githubUser ? `https://github.com/${cfg.githubUser}` : '');
  if (git && githubUrl) { git.href = githubUrl; git.hidden = false; }

  const label = {video:'Vídeo',demo:'Demo / referencia',code:'Código'};
  document.querySelectorAll('.project-links').forEach(box => {
    const p = cfg.projects?.[box.dataset.project] || {};
    ['video','demo','code'].forEach(k => {
      if (!p[k]) return;
      const a = document.createElement('a'); a.href=p[k]; a.target='_blank'; a.rel='noopener'; a.textContent=`${label[k]} ↗`; box.appendChild(a);
    });
  });

  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => entries.forEach(e => {if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12}) : null;
  document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

  const lightbox = document.getElementById('lightbox'), lbImg=lightbox?.querySelector('img'), lbText=lightbox?.querySelector('p');
  const close = () => { if(lightbox){lightbox.hidden=true;lbImg.src='';document.body.style.overflow='';} };
  document.querySelectorAll('[data-lightbox]').forEach(a => a.addEventListener('click',e=>{e.preventDefault();if(!lightbox)return;const img=a.querySelector('img');lbImg.src=a.href;lbImg.alt=img?.alt||'Vista ampliada';lbText.textContent=img?.alt||'';lightbox.hidden=false;document.body.style.overflow='hidden';}));
  lightbox?.querySelector('button')?.addEventListener('click',close); lightbox?.addEventListener('click',e=>{if(e.target===lightbox)close()}); document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
})();
