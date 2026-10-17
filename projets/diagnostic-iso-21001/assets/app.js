"use strict";
const chapters=[
[4,"Contexte",73,"Contexte de l'organisme","Enjeux internes et externes, parties intéressées et structuration des processus.",["Identifier les enjeux internes et externes","Formaliser les attentes des parties intéressées","Cartographier les processus et leurs interactions"],"Mettre à jour la cartographie des processus","Établir le périmètre du management qualité et le suivi des parties intéressées."],
[5,"Leadership",70,"Leadership et politique qualité","Politique, engagement de la direction, rôles et responsabilités.",["Formaliser et diffuser la politique qualité","Définir les responsabilités","Assurer la revue périodique"],"Renforcer la gouvernance qualité","Formaliser une politique cohérente et désigner les responsabilités nécessaires."],
[6,"Planification",46,"Planification et risques","Gestion des risques et opportunités, objectifs SMART et conduite des changements.",["Identifier les risques et opportunités","Définir des objectifs mesurables","Planifier les changements"],"Structurer la planification","Mettre en place un registre de risques et un suivi des objectifs."],
[7,"Support",53,"Ressources et informations documentées","Compétences, sensibilisation, équipements, communication et maîtrise documentaire.",["Planifier des formations","Structurer la communication","Maîtriser les informations documentées"],"Renforcer les moyens","Développer compétences et pratiques de gestion documentaire."],
[8,"Réalisation",68,"Réalisation des activités éducatives","Maîtrise opérationnelle, programmes, évaluations et traitement des réclamations.",["Harmoniser les méthodes","Formaliser les réclamations","Maîtriser les activités opérationnelles"],"Standardiser les pratiques","Développer des processus pédagogiques cohérents et traçables."],
[9,"Évaluation",54,"Évaluation des performances","Indicateurs, audits internes et revues de direction.",["Planifier les audits","Créer un tableau de bord","Formaliser les revues de direction"],"Déployer le pilotage de la performance","Mesurer les résultats et assurer un suivi régulier. Taux du chapitre à consolider : 38 % / 54 %."],
[10,"Amélioration",84,"Amélioration continue","Actions correctives, suivi des non-conformités et cycle PDCA.",["Analyser les causes des écarts","Suivre les actions correctives","Vérifier leur efficacité"],"Pérenniser les actions correctives","Mettre en place un processus de traitement systématique des non-conformités."]
];
const actions=[
["Analyser les besoins des parties intéressées","Contexte","Direction pédagogique",2,"Taux de satisfaction",false],
["Élaborer et diffuser la politique qualité","Leadership","Direction",1,"Politique communiquée",true],
["Désigner un responsable qualité ISO 21001","Leadership","Direction",1,"Responsable nommé",true],
["Cartographier les risques pédagogiques et organisationnels","Planification","Responsable qualité",3,"Risques suivis",true],
["Définir les objectifs SMART et leurs indicateurs","Planification","Direction et responsables pédagogiques",2,"Atteinte des objectifs",false],
["Former et sensibiliser le personnel à la qualité","Support","Responsable qualité",3,"Formations réalisées",false],
["Déployer la maîtrise documentaire","Support","Responsable qualité",2,"Documents maîtrisés",true],
["Planifier la formation continue","Ressources humaines","Service RH",4,"Heures de formation",false],
["Harmoniser les méthodes pédagogiques","Réalisation","Responsables pédagogiques",4,"Méthodes appliquées",false],
["Structurer le traitement des réclamations","Réalisation","Administration pédagogique",2,"Réclamations traitées",false],
["Planifier des audits internes","Évaluation","Responsable qualité",6,"Audits réalisés",false],
["Créer un tableau de bord de performance qualité","Évaluation","Responsable qualité",3,"Tableau de bord actualisé",true],
["Formaliser le traitement des non-conformités","Amélioration","Responsable qualité",2,"Actions clôturées",false],
["Intégrer le cycle PDCA au pilotage","Amélioration","Direction",6,"Amélioration des processus",false]
];
const by=id=>document.getElementById(id);
const safe=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function navigate(page){document.querySelectorAll(".page").forEach(x=>x.classList.toggle("active",x.id==="page-"+page));document.querySelectorAll("[data-tab]").forEach(x=>x.classList.toggle("active",x.dataset.tab===page));by("side").classList.remove("open");window.scrollTo(0,0)}
document.querySelectorAll("[data-tab]").forEach(x=>x.addEventListener("click",()=>navigate(x.dataset.tab)));
document.querySelectorAll("[data-go]").forEach(x=>x.addEventListener("click",()=>navigate(x.dataset.go)));
by("menu").addEventListener("click",()=>by("side").classList.toggle("open"));
by("heroChart").innerHTML=chapters.map(c=>'<div class="hero-one"><b>'+c[2]+'%</b><span style="height:'+c[2]+'%" class="'+(c[2]<55?'low':'')+'"></span><small>'+c[0]+'</small></div>').join("");
const draw=id=>by(id).innerHTML=chapters.map(c=>'<div class="bar-line"><span>Art. '+c[0]+' · '+safe(c[1])+'</span><div class="bar-track"><div class="bar-fill'+(c[2]<55?' low':'')+'" style="width:'+c[2]+'%"></div></div><strong>'+c[2]+' %</strong></div>').join("");
draw("overviewBars");draw("resultsBars");
by("chapters").innerHTML=chapters.map(c=>'<button class="chap-button" data-chap="'+c[0]+'"><small>ARTICLE</small><strong>'+c[0]+'</strong><small>'+c[2]+' %</small></button>').join("");
function selectChapter(num){const c=chapters.find(x=>x[0]===num);if(!c)return;document.querySelectorAll("[data-chap]").forEach(x=>x.classList.toggle("active",Number(x.dataset.chap)===num));by("dNum").textContent="CHAPITRE "+num;by("dName").textContent=c[3];by("dDesc").textContent=c[4];by("dProgress").style.width=c[2]+"%";by("dRate").textContent=c[2]+" % de conformité";by("dChecks").innerHTML=c[5].map(t=>'<div class="check">'+safe(t)+'</div>').join("");by("dObjective").textContent=c[6];by("dGuidance").textContent=c[7];by("dNote").textContent="Évaluation du cas d'étude ; ces résultats ne constituent pas une certification officielle."}
document.querySelectorAll("[data-chap]").forEach(x=>x.addEventListener("click",()=>selectChapter(Number(x.dataset.chap))));selectChapter(4);
const axes=[...new Set(actions.map(x=>x[1]))];by("axis").innerHTML+=axes.map(x=>'<option value="'+safe(x)+'">'+safe(x)+'</option>').join("");let filtered=[];
function drawActions(){const term=by("search").value.toLocaleLowerCase("fr"),axis=by("axis").value,pri=by("priority").value;filtered=actions.filter(a=>(axis==="all"||a[1]===axis)&&(pri==="all"||(pri==="yes"?a[5]:!a[5]))&&a.some(x=>String(x).toLocaleLowerCase("fr").includes(term)));by("rows").innerHTML=filtered.map(a=>'<tr><td>'+safe(a[0])+'</td><td>'+safe(a[1])+'</td><td>'+safe(a[2])+'</td><td>'+a[3]+' mois</td><td>'+safe(a[4])+'</td><td><span class="badge'+(a[5]?' urgent':'')+'">'+(a[5]?'Prioritaire':'Proposée')+'</span></td></tr>').join("")||'<tr><td colspan="6">Aucune action trouvée.</td></tr>';by("count").textContent=filtered.length+" action(s) affichée(s) — plan proposé, pas un suivi d'exécution."}
["search","axis","priority"].forEach(id=>by(id).addEventListener(id==="search"?"input":"change",drawActions));drawActions();
by("export").addEventListener("click",()=>{const csv="\ufeff"+[["Action","Axe","Responsable","Délai mois","Indicateur","Priorité"],...filtered.map(a=>[...a.slice(0,5),a[5]?"Prioritaire":"Autre"])].map(row=>row.map(x=>'"'+String(x).replaceAll('"','""')+'"').join(";")).join("\r\n");const url=URL.createObjectURL(new Blob([csv],{type:"text/csv;charset=utf-8"}));const a=document.createElement("a");a.href=url;a.download="plan-action-iso21001.csv";a.click();setTimeout(()=>URL.revokeObjectURL(url),2000)});
let sim=chapters.map(c=>c[2]);const base=sim.reduce((a,b)=>a+b,0)/sim.length;
by("sliders").innerHTML=chapters.map((c,i)=>'<div class="sliderline"><label for="slide'+i+'">Art. '+c[0]+' · '+safe(c[1])+'</label><input type="range" id="slide'+i+'" min="0" max="100" value="'+c[2]+'"><b id="val'+i+'">'+c[2]+' %</b></div>').join("");
const fmt=n=>n.toLocaleString("fr-FR",{minimumFractionDigits:1,maximumFractionDigits:1});
function showSimulation(){let avg=sim.reduce((a,b)=>a+b,0)/sim.length;by("simTotal").textContent=fmt(avg)+" %";by("simBase").textContent=fmt(base)+" %";by("simDelta").textContent=(avg>=base?"+":"")+fmt(avg-base)+" pts"}
chapters.forEach((c,i)=>by("slide"+i).addEventListener("input",e=>{sim[i]=Number(e.target.value);by("val"+i).textContent=sim[i]+" %";showSimulation()}));
by("reset").addEventListener("click",()=>{sim=chapters.map(c=>c[2]);sim.forEach((v,i)=>{by("slide"+i).value=v;by("val"+i).textContent=v+" %"});showSimulation()});showSimulation();
