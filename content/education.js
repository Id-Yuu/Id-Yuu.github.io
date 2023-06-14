import { educationData } from "../data/store";

export function setupEducation(createEducation) {
  createEducation.innerHTML = `
    <div class="e-head">
      <h1>${educationData.title}</h1>
    </div>
    <div class="e-body">
      <ul>
        ${educationData.data
          .map((edu) => {
            return `<li>${edu.school}, ${edu.major},  ${edu.year}</li>`;
          })
          .join("")}
      </ul>
  </div>
  `;
}
