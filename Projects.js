import { UniversalFunction } from "./UniversalFunction.js";

export class Projects {
  toString() {
    const projects = [
      {
        title: "Rox Blogs",
        description: "Fullstack project with Python,Django,Bootstrap",
      },
      {
        title: "Scraping Tool",
        description: "Internet News Scraper using BeautifulSoup",
      },
      {
        title: "Web Crawler",
        description: "Crawls Data from Web",
      },
      {
        title: "Crypto Dashboard",
        description: "Fullstack Crypto Dashboard using Python,Django,Js",
      },
      
    ];

    const projectList = projects
      .map(
        (project, index) =>
          `<div class="project">
            <span class="project-index">${index + 1}.</span>
            <a href="#" onclick="openProject(${index})" class="project-title">${project.title}</a>
            <span class="project-description">${project.description}</span>
          </div>`
      )
      .join("");

    return `<div class="projects-container">${projectList}</div>`;
  }

  updateDOM() {
    new UniversalFunction().updateElement("div", "output", this.toString());
  }
}
