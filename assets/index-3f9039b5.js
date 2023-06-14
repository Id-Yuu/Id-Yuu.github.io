(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function u(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=u(i);fetch(i.href,a)}})();const o={name:"Ayyub Muhammad",alias:"ID-Yuu",desc:"Hi, I'm Ayyub Muhammad or ID-Yuu. I'm a Junior web developer based in Indonesia. I'm also a fan of anime, manga, and games. Enthusiastic and motivated self-learning in Information Technology. Interested in exploring about front-end react.",profile:"/large-icon.webp"},l={title:"Education",data:[{school:"SMK Al-Fajar",major:"Office Administration",year:"2013 - 2016"},{school:"University Pamulang",major:"Informatics Engineering",year:"2018 - 2023"}]},s={title:"Experience",data:[{position:"Blogger",company:"Arleth Design",year:"(??-20??)",link:"https://arlethdesign.blogspot.com/"},{position:"Operator Dapodik",company:"Junior High School",year:"(??-2015)",link:""},{position:"Internship Archives Officer",company:"Institute of Technology Indonesia",year:"(?? - 2016)",link:""},{position:"Practical work Warehouse Software Development",company:"Textile companies",year:"(2020.06 - 2020.08)",link:""},{position:"Community service Web Programming Training With HTML & CSS",company:"State High School",year:"(2021.07)",link:""}]},c={title:"Certifications",data:[{title:"Responsive Web Design",link:"https://www.freecodecamp.org/certification/ayyub-muhammad/responsive-web-design"},{title:"JavaScript Algorithms and Data Structures",link:"https://www.freecodecamp.org/certification/ayyub-muhammad/javascript-algorithms-and-data-structures"},{title:"Front End Development Libraries",link:"https://www.freecodecamp.org/certification/ayyub-muhammad/front-end-development-libraries"},{title:"Pelatihan Pemrogram (2022.09)",link:"https://drive.google.com/file/d/1w1HvFl6rq7XPVbE0UwQlXiLR6graBsZa/view?usp=sharing"},{title:"LSP-BNSP Pemrogram (2022)",link:"https://drive.google.com/file/d/1w1HvFl6rq7XPVbE0UwQlXiLR6graBsZa/view?usp=sharing"}]},d={title:"Projects",data:[{title:"Portfolio React",link:"https://github.com/Id-Yuu/id-portfolio-yuu"},{title:"PPDB React",link:"https://ppdb-yub.web.app/"},{title:"Read All Repo Github React",link:"https://github.com/Id-Yuu/repo-id-yuu"}]};function p(t){t.innerHTML=`
  <div class="p-head">
    <h1>${o.name} <span>a.k.a ${o.alias}</span></h1>
  </div>
  <div class="p-content">
    <div class="p-img">
       <img src=${o.profile} alt=${o.alias} />
    </div>
    <div class='p-summary'>
     <p>${o.desc}</p>
     <div id="social" />
    </div>
  </div>
  `}function m(t){t.innerHTML=`
    <div class="e-head">
      <h1>${l.title}</h1>
    </div>
    <div class="e-body">
      <ul>
        ${l.data.map(e=>`<li>${e.school}, ${e.major},  ${e.year}</li>`).join("")}
      </ul>
  </div>
  `}function f(t){t.innerHTML=`
    <div class="e-head">
        <h1>${s.title}</h1>
    </div>
    <div class="e-body">
        <ul>
        ${s.data.map(e=>`<li> ${e.position} ${e.link?`<a href="${e.link}" rel="nofollow" target="_blank">#</a>`:""} , <span><i>at</i> ${e.company}, ${e.year}</span> </li>`).join("")}
        </ul>
    </div>
    `}function h(t){t.innerHTML=`
        <div class="c-head">
            <h1>${c.title}</h1>
        </div>
        <div class="c-body">
            <ul>
                ${c.data.map(e=>`<li>${e.title} ${e.link?`<a href="${e.link}" rel="nofollow" target="_blank">#</a>`:""}</li>`).join("")}
            </ul>
        </div>
    `}function v(t){t.innerHTML=`
  <div class="p-head">
    <h1>${d.title}</h1>
  </div>
  <div class="p-body">
    <ul>
      ${d.data.map(e=>`
        <li>
          <b>${e.title}</b>
          <p>
          ${e.link} <a href="${e.link}" target="_blank" rel="noreferrer">#</a>
          </p>
        </li>
        `).join("")}
    </ul>
  </div>
  `}function g(t){t.innerHTML=`
  <div class="profil-link">
    「<a href="mailto:ayyubmuhammad98@gmail.com" rel="nofollow" target="_blank">Email</a>」
    「<a href="https://github.com/Id-Yuu" rel="nofollow" target="_blank">Github</a>」
    「<a href="#" rel="nofollow" target="_blank">CV[2023]</a>」
  </div>
  `}document.querySelector("#app").innerHTML=`
  <div class="paper">
    <div id="profile"></div>
    <div id="education"></div>
    <div id="experience"></div>
    <div id="certificate"></div>
    <div id="project"></div>
  </div>
`;p(document.querySelector("#profile"));m(document.querySelector("#education"));f(document.querySelector("#experience"));h(document.querySelector("#certificate"));v(document.querySelector("#project"));g(document.querySelector("#social"));
