import { profilDesc } from "../data/store";

export function setupProfile(element) {
  element.innerHTML = `
  <div class="p-head">
    <h1>${profilDesc.name} <span>a.k.a ${profilDesc.alias}</span></h1>
  </div>
  <div class="p-content">
    <div class="p-img">
       <img src=${profilDesc.profile} alt=${profilDesc.alias} />
    </div>
    <div class='p-summary'>
     <p>${profilDesc.desc}</p>
     <div id="social" />
    </div>
  </div>
  `;
}
