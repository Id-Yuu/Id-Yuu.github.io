import { projectData } from "../data/store";

export function setupProject(element) {
  element.innerHTML = `
  <div class="p-head">
    <h1>${projectData.title}</h1>
  </div>
  <div class="p-body">
    <ul>
      ${projectData.data
        .map((item) => {
          return `
        <li>
          <b>${item.title}</b>
          <p>
          ${item.link} <a href="${item.link}" target="_blank" rel="noreferrer">#</a>
          </p>
        </li>
        `;
        })
        .join("")}
    </ul>
  </div>
  `;
}
