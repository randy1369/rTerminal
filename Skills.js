import { UniversalFunction } from "./UniversalFunction.js";

export class Skills {
  constructor() {
    this.skills = [
      { name: "JavaScript", percentage: 90 },
      { name: "HTML/CSS", percentage: 85 },
      { name: "React", percentage: 80 },
      { name: "Node.js", percentage: 75 },
      { name: "Python", percentage: 70 },
      { name: "SQL", percentage: 65 },
    ];
  }

  generateHTML() {
    const skillsHTML = this.skills
      .map((skill) => {
        const skillProgress = skill.percentage;
        const progressBar = Array.from({ length: 50 }, (_, i) => {
          if (i < Math.floor((skillProgress / 100) * 50)) {
            return `<span class="block" style="animation-delay: ${i * 20}ms"></span>`;
          } else {
            return `<span class="block-empty"></span>`;
          }
        }).join('');
  
        return `
          <div class="skill">
            <div class="skill-info">
              <div class="skill-name">╭─ ${skill.name}~</div>
              <div class="skill-progress">╰─ progress : [ ${progressBar} ] ${skillProgress}%</div><br>
            </div>
          </div>
        `;
      })
      .join('');
  
    return `
      <div class="skills-container">
        <div class="skills-column">${skillsHTML}</div>
      </div>
    `;
  }
  
  
  
  

  updateDOM() {
    const skillsHTML = this.generateHTML();
    new UniversalFunction().updateElement("div", "output", skillsHTML);
  }
}

function getProgressBar(percentage) {
  const blockCount = 50;
  const completedBlocks = Math.round((percentage / 100) * blockCount);
  const emptyBlocks = blockCount - completedBlocks;
  const completedBlockChar = "█";
  const emptyBlockChar = "-";

  const progressBar = completedBlockChar.repeat(completedBlocks) + emptyBlockChar.repeat(emptyBlocks);
  return progressBar;
}
