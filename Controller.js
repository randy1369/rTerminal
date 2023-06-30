import { About } from "./About.js";
import { Help } from "./Help.js";
import { Socials } from "./Socials.js";
import { Projects } from "./Projects.js";
import { Skills } from "./Skills.js";
import { Cowsay } from "./Cowsay.js";
import { UniversalFunction } from "./UniversalFunction.js";


export class Controller {
  constructor(inputedCommand) {
    this.inputedCommand = inputedCommand;
    this.parseCommand();
  }

  parseCommand() {
    let cmd = this.inputedCommand.split(" ")[0].toLowerCase();

    switch (cmd) {
      case "help":
        new Help().updateDOM();
        break;
      case "about":
        new About().updateDOM();
        break;
      case "whoami":
        const message =
          "The paradox of 'Who am I?' prevails, as we simultaneously grapple with the unknown and uncover our true nature.";
        const coloredMessage = `<span class="colored-text">${message}</span>`;
        new UniversalFunction().updateElement("div", "output", coloredMessage);
        break;

      case "socials":
        new Socials().updateDOM();
        break;

      case "projects":
        const projects = new Projects();
        projects.updateDOM();
        break;

      case "gui":
        const guiMessage = '<p style="font-size: 1rem;">Opening GUI version...</p>';
        new UniversalFunction().updateElement("div", "output", guiMessage);
        const websiteURL = "https://rocks.up.railway.app/"; // Replace with your website URL
        setTimeout(() => {
          window.open(websiteURL, "_blank");
        }, 1000);
        break;

      case "skills":
        const skills = new Skills();
        skills.updateDOM();
        break;

      case "resume":
        const resumeMessage = '<p style="font-size: 1rem;">Loading resume....Done</p>';
        new UniversalFunction().updateElement("div", "output", resumeMessage);
        const resumeURL = "./ROX.pdf"; // Assuming the resume PDF file is named "resume.pdf" and is in the same directory as the other files

        setTimeout(() => {
          window.open(resumeURL, "_blank");
        }, 1000);
        break;

      case "cowsay":
        async function executeCowsay(addCommand) {
          try {
            await Cowsay.getCowsayOutput();
            addCommand();
          } catch (error) {
            console.error(error);
          }
        }
        executeCowsay(window.addCommand);
        break;
      
    


      case "clear":
        document.querySelector("#terminal").innerHTML = "";
        break;
      case "exit":
        new UniversalFunction().updateElement(
          "div",
          "error",
          "Due to security reasons, you can't close this window using the 'exit' command."
        );
        break;
      default:
        let errMsg = `<p style="font-size: 1rem; color: red;">${cmd}: The term '${cmd}' is not recognized as a name of a command.<br>type 'help' to see the list of available commands.</p>`;
        new UniversalFunction().updateElement("div", "error", errMsg);
        break;
    }
  }


}