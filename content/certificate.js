import { certificateData } from "../data/store";

export function setupCertificate(create) {
  create.innerHTML = `
        <div class="c-head">
            <h1>${certificateData.title}</h1>
        </div>
        <div class="c-body">
            <ul>
                ${certificateData.data
                  .map((cert) => {
                    return `<li>${cert.title} ${
                      cert.link
                        ? `<a href="${cert.link}" rel="nofollow" target="_blank">#</a>`
                        : ""
                    }</li>`;
                  })
                  .join("")}
            </ul>
        </div>
    `;
}
