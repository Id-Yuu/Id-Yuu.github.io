import "./style.css";

// Content
import { setupProfile } from "./content/profile";
import { setupEducation } from "./content/education";
import { setupExperience } from "./content/experience";
import { setupCertificate } from "./content/certificate";
import { setupProject } from "./content/project";

// component
import { setupProfileLink } from "./data/social";

document.querySelector("#app").innerHTML = `
  <div class="paper">
    <div id="profile"></div>
    <div id="education"></div>
    <div id="experience"></div>
    <div id="certificate"></div>
    <div id="project"></div>
  </div>
`;

// set data for Content
setupProfile(document.querySelector("#profile"));
setupEducation(document.querySelector("#education"));
setupExperience(document.querySelector("#experience"));
setupCertificate(document.querySelector("#certificate"));
setupProject(document.querySelector("#project"));

// Component setup
setupProfileLink(document.querySelector("#social"));
