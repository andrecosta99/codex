const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
function dashboard(){return `<div class="window-top"><span class="mini-brand">FLOW /</span><span>Workspace / <b>Visão geral</b></span><span class="window-actions">◉ &nbsp; ⌕ &nbsp; ···</span></div><div class="dashboard-layout"><aside class="sidebar"><div class="workspace-picker">◈ &nbsp; Studio Workspace &nbsp;⌄</div><div class="nav-item selected">▦ &nbsp; Visão geral</div><div class="nav-item">☑ &nbsp; As minhas tarefas</div><div class="nav-item">▧ &nbsp; Projetos</div><div class="nav-item">▦ &nbsp; Calendário</div><div class="nav-item">◉ &nbsp; Mensagens &nbsp; 3</div><div class="nav-label">OS SEUS PROJETOS</div><div class="nav-item">◦ &nbsp; Website 2.0</div><div class="nav-item">◦ &nbsp; Brand strategy</div><div class="nav-item">◦ &nbsp; App mobile</div><div class="sidebar-bottom"><span class="avatar">AC</span> André Costa &nbsp; ⌄</div></aside><div class="dashboard-main"><div class="greeting-row"><div><div class="eyebrow">QUINTA-FEIRA, 15 DE OUTUBRO</div><h2>Bom dia, André <span class="muted">↗</span></h2><p>Tudo o que precisa para fazer acontecer.</p></div><div class="date-chip">▦ &nbsp; Esta semana &nbsp; ⌄</div></div><div class="stats"><div class="stat"><div class="stat-title">Projetos ativos <span>↗</span></div><div class="stat-value">08 <small><b>+2</b> este mês</small></div></div><div class="stat"><div class="stat-title">Tarefas concluídas <span>✓</span></div><div class="stat-value">24 <small><b>↑ 32%</b> esta semana</small></div></div><div class="stat"><div class="stat-title">Equipa em sintonia <span>◉</span></div><div class="stat-value">12 <div class="avatar-stack"><span>AC</span><span>MS</span><span>JL</span></div></div></div></div><div class="dashboard-grid"><div class="panel"><div class="panel-title">Os seus projetos <small>Ver todos ↗</small></div>${[['Website 2.0',75,'12 de 16 tarefas','Entrega 23 out.'],['Brand strategy',48,'6 de 12 tarefas','Entrega 28 out.'],['App mobile',92,'23 de 25 tarefas','Entrega 30 out.']].map(([name,p,meta,date])=>`<div class="project"><div class="project-heading">${name}<span>${p}%</span></div><div class="progress"><i data-width="${p}%"></i></div><div class="project-meta"><span>${meta}</span><span>${date}</span></div></div>`).join('')}</div><div class="panel"><div class="panel-title">O seu foco de hoje <small>+ Adicionar</small></div>${[['Rever proposta visual','10:30',false],['Preparar apresentação','14:00',false],['Feedback do cliente','16:00',false],['Alinhar com a equipa','09:00',true]].map(([name,time,done])=>`<div class="task-row ${done?'done':''}"><span class="check">${done?'✓':''}</span><span class="task-name">${name}</span><small>${time}</small></div>`).join('')}</div></div><div class="activity"><span class="avatar">MS</span><span><b>Mariana</b> concluiu <b>Design system · Componentes</b></span><small>Há 2 minutos</small><span>✓</span></div></div></div>`}
$('#dashboard').innerHTML=dashboard();$('#desktop-composition').innerHTML=dashboard();
const chaosNames=['Rever proposta visual','Nova mensagem de Mariana','Reunião com o cliente','Atualizar o briefing','12 notificações por ler','Onde está o ficheiro final?','Preparar apresentação','Prazo alterado: amanhã','Feedback do cliente','Website — versão final_v3','Alinhar com a equipa','Nova tarefa atribuída','Entrega: identidade visual','Precisamos de feedback','Rever o orçamento','5 documentos partilhados','Atualizar o calendário','Aprovar componentes','Reunião em 10 minutos','Nova menção no projeto','Revisões pendentes','Sprint 04 — planeamento','Qual é a última versão?','Enviar ficheiros'];
chaosNames.forEach((name,i)=>{const el=document.createElement('div');el.className='chaos-card';el.innerHTML=`<div class="card-top"><span>${['☷ TAREFA','◉ MENSAGEM','◷ NOTIFICAÇÃO'][i%3]}</span><span>···</span></div><p>${name}</p><div class="card-foot"><span>${['Hoje · 10:30','Há 2 minutos','Prioridade alta','Website 2.0'][i%4]}</span><span class="avatar">${['AC','MS','JL','RF'][i%4]}</span></div>`;const col=i%8,row=Math.floor(i/8);el.style.left=`${-80+col*258+(row%2)*50}px`;el.style.top=`${140+row*300+(i%3)*45}px`;el.dataset.rotation=(-15+(i*13)%31);$('#chaos-cards').append(el);});
const columns=[['Por fazer','03',[['Pesquisa de referências','RESEARCH','Hoje','AC'],['Copy da landing page','CONTEÚDO','16 out.','MS']]],['Em curso','02',[['Design da homepage','DESIGN','Hoje','JL'],['Protótipo interativo','PRODUTO','17 out.','AC']]],['Concluído','08',[['Arquitetura de informação','ESTRATÉGIA','Concluído','RF'],['Design system','DESIGN','Concluído','MS']]]];
$('#kanban').innerHTML=columns.map(([name,n,cards],i)=>`<div class="kanban-column"><div class="column-heading"><i class="${i===2?'filled':''}"></i>${name}<b>${n}</b><span>+</span></div>${cards.map(([title,tag,date,user],j)=>`<div class="kanban-card" id="task-${i}-${j}"><span class="card-tag">${tag}</span><h3>${title}</h3><div class="card-meta"><span>${i===2?'✓':'◷'} ${date}</span><span>☷ ${j+2}</span><span class="avatar">${user}</span></div></div>`).join('')}</div>`).join('');
$('#calendar').innerHTML=['Segunda','Terça','Quarta','Quinta','Sexta'].map((name,i)=>`<div class="day ${i===3?'today':''}"><div class="day-header"><span>${name.toUpperCase()}</span><strong>${12+i}</strong></div></div>`).join('')+[
 ['Kick-off · Website 2.0','09:00 – 10:00',1,80,18,false],['Design sprint','10:00 – 12:00',21,143,37,false],['Revisão de protótipo','11:00 – 12:00',41,206,18,false],['Apresentação ao cliente','14:00 – 15:00',61,80,18,true],['Entrega final ↗','16:00 · Website 2.0',81,206,18,false]
].map(([title,time,left,top,width,bright])=>`<div class="calendar-event ${bright?'bright':''}" style="left:${left}%;top:${top}px;width:${width}%"><strong>${title}</strong><small>${time}</small></div>`).join('');
// Draw directional icons as SVG for identical rendering on every machine.
const arrowPaths={'↗':'M3 13L13 3M4 3h9v9','↙':'M13 3L3 13M3 4v9h9','↔':'M2 8h12M5 5L2 8l3 3M11 5l3 3-3 3','↑':'M8 14V2M3 7l5-5 5 5','↓':'M8 2v12M3 9l5 5 5-5','↻':'M13 6a5 5 0 1 0 .2 4M13 2v4H9','↶':'M3 6a5 5 0 1 1-.2 4M3 2v4h4'};
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
const iconNodes=[];while(walker.nextNode()){if(/[↗↙↔↑↓↻↶]/.test(walker.currentNode.textContent))iconNodes.push(walker.currentNode);}
for(const node of iconNodes){const fragment=document.createDocumentFragment();for(const char of node.textContent){if(arrowPaths[char]){const icon=document.createElementNS('http://www.w3.org/2000/svg','svg');icon.setAttribute('viewBox','0 0 16 16');icon.setAttribute('class','flow-arrow');icon.setAttribute('aria-hidden','true');const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',arrowPaths[char]);icon.append(path);fragment.append(icon);}else fragment.append(document.createTextNode(char));}node.replaceWith(fragment);}
function fit(){const v=$('#viewport');gsap.set('#stage',{scale:Math.min(v.clientWidth/1920,v.clientHeight/1080)});}new ResizeObserver(fit).observe($('#viewport'));fit();
// Echo silhouettes are real DOM layers, so seeking and reverse playback stay deterministic.
const echoes=[];for(let i=0;i<3;i++){const e=$('#chaos-cards').cloneNode(true);e.removeAttribute('id');e.classList.add('echo-layer');e.style.cssText='position:absolute;inset:0;pointer-events:none;visibility:hidden;';$('#chaos').prepend(e);echoes.push(e);}
gsap.set('.scene',{autoAlpha:0});gsap.set('#intro',{autoAlpha:1});gsap.set('.chaos-card',{rotation:(i,el)=>+el.dataset.rotation});
const boardColumns=$$('.kanban-column');
const columnStep=boardColumns[1].offsetLeft-boardColumns[0].offsetLeft;
const cardStep=$('#task-0-1').offsetTop-$('#task-0-0').offsetTop;
const tl=gsap.timeline({paused:true,defaults:{ease:'power3.inOut'},repeat:-1,onUpdate:updateTransport});
window.flowTimeline=tl;
function words(scene,t){tl.from(`${scene} h1 span`,{y:80,autoAlpha:0,rotation:2,stagger:.13,duration:.65,ease:'power3.out'},t);tl.from(`${scene} .eyebrow,${scene} .headline p`,{y:15,autoAlpha:0,duration:.5,stagger:.12},t+.05);}
function enter(scene,t){tl.set(scene,{autoAlpha:1},t);}
function exit(scene,t,duration=.5){tl.to(scene,{autoAlpha:0,duration},t);}
// 00:00 — 00:03 | Four independent arcs assemble the logotype.
tl.from('.hero-mark i',{x:(i)=>[-300,170,300,-170][i],y:(i)=>[-170,-300,170,300][i],rotation:'-=85',scale:.13,autoAlpha:0,duration:1.1,stagger:.07,ease:'expo.out'},0);
tl.from('.intro-letter,.hero-brand sup',{y:35,autoAlpha:0,scale:.88,stagger:.09,duration:.85},.65);
tl.from('.intro-kicker,.intro-bottom,.cross',{autoAlpha:0,y:15,duration:.8,stagger:.1},.9);
tl.from('.intro-orbit',{scale:.8,autoAlpha:0,duration:1.5,stagger:.15},.1);
tl.to('#intro',{scale:1.1,autoAlpha:0,duration:.55},2.6);
// 00:03 — 00:07 | Noise accumulates, then leaves a dissipating echo.
enter('#chaos',2.9);tl.from('#chaos-cards .chaos-card',{scale:.6,z:0,autoAlpha:0,x:(i)=>((i%2)?220:-220),y:(i)=>((i%3)-1)*120,stagger:.025,duration:.65},2.9);words('#chaos',3.35);
tl.to('#chaos-cards .chaos-card',{y:'-=16',rotation:'+=3',stagger:.008,duration:1.2,ease:'sine.inOut'},4.6);
echoes.forEach((el,i)=>{tl.set(el,{autoAlpha:.13-i*.035},6.1+i*.05);tl.to(el,{x:(i+1)*105,scale:1.08+i*.05,autoAlpha:0,duration:.65},6.12+i*.07);});
tl.to('#chaos-cards',{scale:1.4,x:350,autoAlpha:0,duration:.7,ease:'power3.in'},6.05);exit('#chaos',6.65,.35);
// 00:07 — 00:11 | The same visual language settles into one workspace.
enter('#clarity',6.9);words('#clarity',7.05);
tl.from('#dashboard',{y:260,x:110,scale:.8,rotation:4,autoAlpha:0,duration:1.05,ease:'expo.out'},7.05);
tl.from('#dashboard .stat,#dashboard .panel,#dashboard .activity',{y:45,autoAlpha:0,stagger:.1,duration:.7},7.55);
tl.to('#dashboard .progress i',{width:(i,e)=>e.dataset.width,duration:1.1,stagger:.12},8.05);
tl.from('.floating-note',{y:60,x:-50,autoAlpha:0,scale:.8,duration:.6},8.65);
tl.to('#dashboard',{y:-15,scale:1.025,duration:1.3,ease:'sine.inOut'},9.2);
tl.to('#clarity',{x:-180,autoAlpha:0,scale:1.05,duration:.6},10.6);
// 00:11 — 00:16 | Shared priorities. Cards travel between real board columns.
enter('#team',10.9);words('#team',11.05);
tl.from('.kanban-window',{x:280,y:100,scale:.94,autoAlpha:0,duration:.8},11.05);
tl.from('.kanban-card',{y:50,autoAlpha:0,stagger:.1,duration:.55},11.5);
tl.from('#team .avatar-stack span,#team .avatar',{scale:0,autoAlpha:0,duration:.4,stagger:.06,ease:'back.out(1.6)'},12.1);
tl.to('#task-2-0',{autoAlpha:0,scale:.9,duration:.45},12.4);
tl.to('#task-2-1',{y:-cardStep,duration:.55},12.8);
tl.to('#task-1-1',{x:columnStep,rotation:-3,duration:.8},12.8).to('#task-1-1',{rotation:0,duration:.25},13.6);
tl.to('#task-1-0',{y:cardStep,duration:.55},13.35);
tl.to('#task-0-0',{x:columnStep,rotation:3,boxShadow:'0 20px 35px #0009',duration:.8},13.6).to('#task-0-0',{rotation:0,duration:.3},14.4);
tl.to('#task-0-1',{y:-cardStep,duration:.55},14.05);
tl.from('.team-caption',{y:20,autoAlpha:0,duration:.5},14.5);
tl.to('#team',{y:-160,scale:1.1,autoAlpha:0,duration:.65},15.55);
// 00:16 — 00:21 | An animated week with measurable progress.
enter('#motion',15.9);words('#motion',16.05);
tl.from('.calendar-window',{y:260,scale:.9,rotationX:10,autoAlpha:0,duration:.85},16.1);
tl.from('.day',{autoAlpha:0,x:35,stagger:.08,duration:.5},16.5);
tl.from('.calendar-event',{scaleX:0,transformOrigin:'left center',autoAlpha:0,stagger:.17,duration:.65},17.05);
const count={value:0};tl.to(count,{value:18,duration:1.6,ease:'power2.out',onUpdate:()=>{$('#task-count').innerHTML=`${Math.round(count.value)}<span>/ 24</span>`;}},17.8);
tl.to('.calendar-summary .progress i',{width:'75%',duration:1.5},17.8);
tl.from('.growth',{y:20,autoAlpha:0,duration:.55},18.8);
tl.to('.calendar-window',{scale:1.035,y:-10,duration:1.2,ease:'sine.inOut'},19.2);
tl.to('#motion',{x:-260,scale:.95,autoAlpha:0,duration:.6},20.6);
// 00:21 — 00:26 | One connected product, across screens.
enter('#together',20.9);words('#together',21.05);
tl.from('#desktop-composition',{x:500,rotation:5,scale:.8,autoAlpha:0,duration:.9},21.1);
tl.to('#desktop-composition .progress i',{width:(i,e)=>e.dataset.width,duration:1,stagger:.1},21.6);
tl.from('.phone',{y:350,x:150,rotation:12,autoAlpha:0,duration:1,ease:'expo.out'},22);
tl.to('#desktop-composition',{x:-45,scale:.9,rotation:-2,duration:1},22.4);
tl.to('.phone',{y:-20,x:-50,rotation:-3,duration:1.3,ease:'sine.inOut'},23.2);
tl.from('.composition-note,.device-tags',{autoAlpha:0,y:15,duration:.5},23.3);
// 00:26 — 00:30 | The workspace folds back into the four brand segments.
tl.to('#together .headline,#together .composition-note',{autoAlpha:0,y:-30,duration:.45},25.65);
tl.to('#desktop-composition',{x:-340,y:-110,scale:.12,rotation:18,autoAlpha:0,duration:.75,ease:'power3.in'},25.65);
tl.to('.phone',{x:-540,y:-200,scale:.15,rotation:-30,autoAlpha:0,duration:.7},25.8);
enter('#final',26);exit('#together',26.4,.1);
tl.from('.final-mark i',{x:(i)=>[-340,340,340,-340][i],y:(i)=>[-120,-120,250,250][i],rotation:'-=90',scale:.4,autoAlpha:0,duration:.9,stagger:.04,ease:'expo.out'},26.05);
tl.from('.final-brand',{y:50,scale:.9,autoAlpha:0,duration:.8},26.65);
tl.from('.final-tagline span',{y:22,autoAlpha:0,stagger:.2,duration:.7},27.15);
tl.from('.final-bottom',{autoAlpha:0,y:10,duration:.6},27.8);
tl.to('#final',{autoAlpha:0,duration:.4},29.6);
// Explicit endpoint keeps the film at exactly 30 seconds.
tl.set('#final',{autoAlpha:0},30);
const chapters=[[0,'01 / INTRODUÇÃO'],[3,'02 / MENOS CONFUSÃO'],[7,'03 / MAIS CLAREZA'],[11,'04 / EQUIPA ALINHADA'],[16,'05 / EM MOVIMENTO'],[21,'06 / NUM SÓ LUGAR'],[26,'07 / FLOW']];
const play=$('#play'),scrubber=$('#scrubber');let looping=true;
function updateTransport(){const t=tl.time();$('#elapsed').textContent=`00:${String(Math.floor(t)).padStart(2,'0')}`;scrubber.value=t;scrubber.style.setProperty('--position',`${t/30*100}%`);$('#scene-label').textContent=chapters.findLast(([at])=>t>=at)?.[1]||chapters[0][1];}
function syncPlay(){const paused=tl.paused();play.setAttribute('aria-label',paused?'Reproduzir animação':'Pausar animação');play.innerHTML=paused?'<svg viewBox="0 0 16 16"><path d="M4 2l9 6-9 6z" fill="currentColor" stroke="none"/></svg>':'<svg viewBox="0 0 16 16"><path d="M5 3v10M11 3v10"/></svg>';}
play.addEventListener('click',()=>{if(tl.time()>=30)tl.restart();else tl.paused(!tl.paused());syncPlay();});
$('#restart').addEventListener('click',()=>{tl.restart();syncPlay();});
scrubber.addEventListener('input',()=>{tl.pause().time(+scrubber.value);syncPlay();});
$('#loop').addEventListener('click',()=>{looping=!looping;tl.repeat(looping?-1:0);$('#loop').classList.toggle('active',looping);$('#loop').setAttribute('aria-pressed',String(looping));});
$('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{}});
document.addEventListener('keydown',e=>{if(e.code==='Space'&&!['INPUT','BUTTON'].includes(document.activeElement.tagName)){e.preventDefault();play.click();}if(e.code==='ArrowRight'&&document.activeElement!==scrubber){e.preventDefault();tl.pause().time(Math.min(30,tl.time()+1));syncPlay();}if(e.code==='ArrowLeft'&&document.activeElement!==scrubber){e.preventDefault();tl.pause().time(Math.max(0,tl.time()-1));syncPlay();}});
tl.eventCallback('onComplete',()=>{tl.pause();syncPlay();});
// Wait briefly for local fonts to avoid a layout shift during the opening.
document.fonts.ready.then(()=>{tl.play(0);syncPlay();});
