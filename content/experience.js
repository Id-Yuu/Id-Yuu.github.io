import { experienceData } from "../data/store";

export function setupExperience(createExperience) {
  createExperience.innerHTML = `
    <div class="e-head">
        <h1>${experienceData.title}</h1>
    </div>
    <div class="e-body">
        <ul>
        ${experienceData.data
          .map((exp) => {
            return `<li> ${exp.position} ${
              exp.link
                ? `<a href="${exp.link}" rel="nofollow" target="_blank">#</a>`
                : ""
            } , <span><i>at</i> ${exp.company}, ${exp.year}</span> </li>`;
          })
          .join("")}
        </ul>
    </div>
    `;
}
