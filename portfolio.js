/* Bilingual, framework-free portfolio: one source of truth for all case studies. */
(() => {
  'use strict';
  const root = document.getElementById('site-root');
  const db = window.SC_PORTFOLIO;
  if (!root || !db) return;

  const isCase = document.body.dataset.page === 'case';
  const params = new URLSearchParams(window.location.search);
  const lang = isCase ? (params.get('lang') === 'en' ? 'en' : 'es') : (document.documentElement.lang === 'en' ? 'en' : 'es');
  const t = db.ui[lang];
  const home = lang === 'en' ? 'en.html' : 'index.html';
  const other = lang === 'en' ? 'es' : 'en';
  const langLabel = lang === 'en' ? 'ES' : 'EN';
  const projectHref = (id,l=lang) => 'project.html?id=' + encodeURIComponent(id) + '&lang=' + l;
  const esc = (str='') => String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const httpUrl = str => typeof str === 'string' && /^https:\/\//.test(str) ? str : '';
  const img = (p) => p.image ? '<img src="' + esc(p.image) + '" alt="' + esc((lang === 'en' ? 'Project screenshot: ' : 'Captura del proyecto: ') + p[lang].title) + '" loading="lazy">' : '<div class="concept-art ' + esc(p.theme) + '" aria-label="' + esc(t.caseMediaNotice) + '"><strong>XR<br>' + (p.id==='fisica'?'PHYSICS':'JOMARA') + '</strong><small>CONCEPT VISUAL / NOT A SCREENSHOT</small></div>';
  const tags = p => '<div class="tag-list">' + p.tags.map(x=>'<span class="tag">'+esc(x)+'</span>').join('') + '</div>';
  const sectionHead = (label,title,desc='') => '<div class="section-head reveal"><div><p class="eyebrow">'+esc(label)+'</p><h2>'+esc(title)+'</h2></div>'+(desc?'<p>'+esc(desc)+'</p>':'')+'</div>';

  const header = (onCase=false) => {
    const nav = [
      [t.navAbout,home+'#about'],
      [t.navProfessional,home+'#professional'],
      [t.navPersonal,home+'#xr'],
      [t.navExperience,home+'#experience'],
      [t.navContact,home+'#contact']
    ];
    const langUrl = onCase ? projectHref(params.get('id') || 'audiencias',other) : (lang==='es'?'en.html':'index.html');
    return '<div class="progress-track" aria-hidden="true"><span class="progress-bar" id="progress"></span></div>'+
      '<a class="skip" href="#main">'+(lang==='es'?'Saltar al contenido':'Skip to content')+'</a>'+
      '<header class="site-header" id="header"><div class="container nav-inner">'+
      '<a class="logo" href="'+home+'#top" aria-label="Stalin Carrión">Stalin<span class="logo-dot">.</span>Carrión</a>'+
      '<nav class="main-nav" id="main-nav" aria-label="'+(lang==='es'?'Navegación principal':'Main navigation')+'">'+
      nav.map(([txt,href])=>'<a href="'+href+'">'+esc(txt)+'</a>').join('')+'</nav>'+
      '<div class="nav-tools"><a class="lang-switch" href="'+langUrl+'" aria-label="'+esc(t.language)+'">'+langLabel+'</a>'+
      '<button type="button" class="mobile-menu" id="mobile-menu" aria-expanded="false" aria-controls="main-nav" aria-label="'+esc(t.menu)+'">☰</button></div>'+
      '</div></header>';
  };

  const foot = () => '<footer class="container footer"><span>© '+new Date().getFullYear()+' Stalin Carrión</span><span>'+esc(t.footer)+'</span><a href="'+home+'#top">↑ Top</a></footer>';
  const linksFor = p => {
    const cfg = window.PORTFOLIO_CONFIG?.projects?.[p.id] || {};
    const links = [['video',t.linkVideo],['demo',t.linkDemo],['code',t.linkCode]];
    return links.filter(([key])=>httpUrl(cfg[key])).map(([key,label])=>'<a class="button secondary" href="'+esc(cfg[key])+'" target="_blank" rel="noopener noreferrer">'+esc(label)+' ↗</a>').join('');
  };
  const card = (p, i) => '<a class="project-card reveal" data-delay="'+(i%3+1)+'" href="'+projectHref(p.id)+'" aria-label="'+esc(p[lang].title)+' — '+esc(t.viewProject)+'">'+
    '<div class="project-art">'+img(p)+'<span class="project-arrow" aria-hidden="true">↗</span></div>'+
    '<div class="project-kicker"><span>'+esc(p[lang].category)+'</span><span>0'+(i+1)+'</span></div>'+
    '<h3>'+esc(p[lang].title)+'</h3><p>'+esc(p[lang].description)+'</p><p class="card-role"><b>'+esc(t.projectRole)+':</b> '+esc(p[lang].role)+'</p>'+tags(p)+'</a>';

  const featured = p => '<article class="featured reveal"><a class="featured-visual" href="'+projectHref(p.id)+'" aria-label="'+esc(t.viewProject+': '+p[lang].title)+'">'+img(p)+
    '<span class="featured-image-label">'+esc(p[lang].category)+'</span></a>'+
    '<div class="featured-copy"><p class="eyebrow">01 / UNITY + C# + PHOTON</p><h3>'+esc(p[lang].title)+'</h3><p>'+esc(p[lang].description)+'</p>'+
    '<div class="featured-role"><small>'+esc(t.projectRole)+'</small><strong>'+esc(p[lang].role)+'</strong></div>'+
    tags(p)+'<a class="text-arrow" href="'+projectHref(p.id)+'">'+esc(t.viewProject)+' <span>→</span></a></div></article>';

  const renderHome = () => {
    const featuredProject = db.projects.find(p=>p.featured);
    const professional = db.projects.filter(p=>p.group==='professional'&&!p.featured);
    const xr = db.projects.filter(p=>p.group==='xr');
    const minor = db.projects.filter(p=>p.group==='other');
    document.title=t.documentTitle;
    root.innerHTML=header(false)+
      '<main id="main"><section class="container hero" id="top">'+
      '<div class="hero-intro"><p class="eyebrow hero-eyebrow">'+esc(t.heroPre)+'</p>'+
      '<h1 class="hero-title">'+esc(t.heroTitleA)+'<br><em>'+esc(t.heroTitleB)+'</em></h1>'+
      '<p class="hero-lead">'+esc(t.heroLead)+'</p>'+
      '<div class="hero-actions"><a class="button primary" href="#featured">'+esc(t.heroCta)+' ↘</a>'+
      '<a class="button secondary" href="'+esc(db.personal.cv)+'" target="_blank" rel="noopener">'+esc(t.heroCv)+' ↗</a></div></div>'+
      '<a class="hero-art" href="'+projectHref(featuredProject.id)+'"><span class="hero-corner">FEATURED / UNITY</span>'+
      '<img class="hero-static" src="'+esc(featuredProject.image)+'" alt="'+esc(featuredProject[lang].title)+'">'+
      '<video class="hero-video" id="hero-video" autoplay muted loop playsinline preload="metadata" aria-hidden="true" poster="'+esc(featuredProject.image)+'"><source src="assets/video/intro-blue.mp4" type="video/mp4"></video>'+
      '<div class="hero-art-caption"><div><strong>'+esc(featuredProject[lang].title)+'</strong><small>'+esc(featuredProject[lang].reach)+'</small></div><span class="arrow">↗</span></div></a>'+
      '<span class="scroll-cue">'+esc(t.scroll)+'</span></section>'+
      '<section class="section" id="about"><div class="container">'+sectionHead(t.aboutLabel,t.aboutTitle)+
      '<div class="about-grid"><p class="about-statement reveal">'+esc(t.aboutText)+'</p>'+
      '<p class="about-desc reveal" data-delay="1">'+esc(t.expText)+'</p></div>'+
      '<div class="about-stats reveal"><div><div class="stat-value">6+</div><div class="stat-label">'+esc(t.proofOne)+'</div></div>'+
      '<div><div class="stat-value">8</div><div class="stat-label">'+esc(t.proofTwo)+'</div></div>'+
      '<div><div class="stat-value">~5,000</div><div class="stat-label">'+esc(t.proofThree)+'</div></div>'+
      '<p class="stat-note">* '+esc(t.proofNote)+'</p></div></div></section>'+
      '<section class="section" id="featured"><div class="container">'+sectionHead(t.featuredLabel,t.featuredTitle,t.clickToView)+featured(featuredProject)+'</div></section>'+
      '<section class="section" id="professional"><div class="container">'+sectionHead(t.proLabel,t.proTitle,t.proIntro)+
      '<div class="project-grid">'+professional.map(card).join('')+'</div></div></section>'+
      '<section class="section" id="xr"><div class="container">'+sectionHead(t.xrLabel,t.xrTitle,t.xrIntro)+
      '<div class="project-grid">'+xr.map(card).join('')+'</div>'+
      '<div style="margin-top:70px"><p class="eyebrow">'+esc(t.moreLabel)+'</p><h3 style="font-size:1.85rem;margin:10px 0 24px">'+esc(t.moreTitle)+'</h3>'+
      '<div class="more-grid">'+minor.map(p=>'<a class="minor-card reveal" href="'+projectHref(p.id)+'"><div class="minor-image">'+img(p)+'</div>'+
      '<div><strong>'+esc(p[lang].title)+'</strong><p>'+esc(p[lang].role)+'</p></div><span class="arrow" aria-hidden="true">↗</span></a>').join('')+
      '</div></div></div></section>'+
      '<section class="section" id="experience"><div class="container">'+sectionHead(t.expLabel,t.expTitle,t.expText)+
      '<div class="experience-wrap"><div class="timeline reveal">'+t.timeline.map(x=>'<article class="timeline-item"><span class="timeline-period">'+esc(x.period)+'</span><h3>'+esc(x.title)+'</h3><small>'+esc(x.place)+'</small><p>'+esc(x.desc)+'</p></article>').join('')+'</div>'+
      '<aside class="side-profile reveal" data-delay="1"><p class="eyebrow">'+esc(t.techLabel)+'</p><h3>Unity · C# · XR</h3>'+
      '<div class="skills-cloud">'+['Unity','C#','Meta Quest','Meta XR SDK','Photon','Firebase','PostgreSQL','GitHub','GitLab','Blender','ProBuilder','Unity Profiler','Windows','Android','WebGL'].map(x=>'<span>'+esc(x)+'</span>').join('')+'</div>'+
      '<div class="education-line"><p class="eyebrow">'+esc(t.education)+'</p><p>'+esc(t.master)+'</p><p>'+esc(t.degree)+'</p></div></aside></div></div></section>'+
      '<section class="contact-block" id="contact"><div class="container reveal"><p class="eyebrow">'+esc(t.contactLabel)+'</p><h2>'+esc(t.contactTitle)+'</h2><p>'+esc(t.contactText)+'</p>'+
      '<div class="contact-links"><a class="button primary" href="mailto:'+esc(db.personal.email)+'">'+esc(t.write)+' ↗</a>'+
      '<a class="button secondary" href="'+esc(db.personal.linkedin)+'" target="_blank" rel="noopener">LinkedIn ↗</a>'+
      '<a class="button secondary" href="'+esc(db.personal.github)+'" target="_blank" rel="noopener">GitHub ↗</a></div></div></section>'+
      '</main>'+foot();
  };

  const detailField = (label,body,isList=false) => '<div class="detail-section reveal"><h2>'+esc(label)+'</h2>'+
     (isList ? '<ul>'+body.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>' : '<p>'+esc(body)+'</p>')+'</div>';

  const renderCase = () => {
    const p = db.projects.find(x=>x.id===params.get('id'));
    if (!p) {
      document.title='Project not found';
      root.innerHTML=header(true)+'<main class="container" id="main" style="padding:100px 0"><h1>404</h1><p>Project not found.</p><a class="button primary" href="'+home+'">'+esc(t.back)+'</a></main>'+foot();
      return;
    }
    const d = p[lang];
    document.title=d.title+' — Stalin Carrión';
    root.innerHTML=header(true)+'<main id="main"><section class="container detail-hero">'+
      '<a class="detail-back" href="'+home+'#'+(p.featured?'featured':p.group==='xr'?'xr':'professional')+'">← '+esc(t.back)+'</a>'+
      '<div class="detail-heading"><div><p class="eyebrow">'+esc(d.category)+'</p><h1>'+esc(d.title)+'</h1></div><p>'+esc(d.description)+'</p></div>'+
      '<div class="detail-media reveal">'+img(p)+(p.image?'':'<span class="detail-label">'+esc(t.caseMediaNotice)+'</span>')+'</div>'+
      '<div class="detail-meta"><div><p class="eyebrow">'+esc(t.projectRole)+'</p><strong>'+esc(d.role)+'</strong></div>'+
      '<div><p class="eyebrow">STACK</p>'+tags(p)+'</div></div>'+
      detailField(t.caseProblem,d.problem)+detailField(t.caseSolution,d.solution)+
      detailField(t.caseContribution,d.contribution,true)+detailField(t.caseResult,d.result)+
      detailField(t.caseNotes,d.details)+
      '<div class="detail-bottom"><a class="detail-back" href="'+home+'#'+(p.featured?'featured':p.group==='xr'?'xr':'professional')+'">← '+esc(t.back)+'</a>'+
      '<div class="contact-links">'+linksFor(p)+'</div></div></section>'+
      '<section class="detail-contact"><h2>'+esc(t.caseContact)+'</h2>'+
      '<a class="button primary" href="mailto:'+esc(db.personal.email)+'?subject='+encodeURIComponent(d.title)+'">'+esc(t.contactButton)+' ↗</a></section></main>'+foot();
  };

  if (isCase) renderCase(); else renderHome();
  // Video is decorative. Keep the screenshot fallback if media fails or motion is reduced.
  const heroVideo = document.getElementById('hero-video');
  if (heroVideo) {
    heroVideo.addEventListener('loadeddata', () => heroVideo.classList.add('video-ready'));
    heroVideo.addEventListener('error', () => heroVideo.classList.remove('video-ready'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      heroVideo.pause();
      heroVideo.removeAttribute('autoplay');
      heroVideo.classList.remove('video-ready');
    } else {
      const attempted = heroVideo.play();
      if (attempted?.catch) attempted.catch(() => heroVideo.classList.remove('video-ready'));
    }
  }

  document.documentElement.lang=lang;

  const menu = document.getElementById('mobile-menu'), nav = document.getElementById('main-nav');
  menu?.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(isOpen));menu.textContent=isOpen?'×':'☰';});
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='☰';}));

  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const obs=!reduced && 'IntersectionObserver' in window ?
    new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}}),{threshold:.08}) : null;
  document.querySelectorAll('.reveal').forEach(el=>obs?obs.observe(el):el.classList.add('in'));

  const headerEl=document.getElementById('header'), prog=document.getElementById('progress');
  let ticking=false;
  const scrollUpdate=()=>{
    const max=document.documentElement.scrollHeight-window.innerHeight;
    const frac=max>0?Math.min(1,Math.max(0,window.scrollY/max)):0;
    if(prog)prog.style.transform='scaleX('+frac+')';
    headerEl?.classList.toggle('scrolled',window.scrollY>32);
    ticking=false;
  };
  window.addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(scrollUpdate);}},{passive:true});
  scrollUpdate();

  if(!isCase && window.location.hash){
    const target=document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    if(target) requestAnimationFrame(()=>target.scrollIntoView({behavior:'instant',block:'start'}));
  }
})();
