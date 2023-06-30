import { Controller } from "./Controller.js";

// get terminal element
const terminal = document.getElementById("terminal");
let commandHistory = [];
let historyIndex = -1;

// Existing code...

// Click event listener for the terminal
terminal.addEventListener("click", () => {
  const commandInput = document.getElementById("command_input");
  commandInput.focus();
});


window.addCommand = function() {
  // Existing code...
}

// Existing code...
function addCommand() {
  let Command = document.createElement("div");
  Command.classList.add("command");
  Command.innerHTML = `
    <div class="line1">
      <div>
        <span class="os">╭─ </span>
        <span class="user">root@</span>
        <span class="host">r0cks-portfolio</span>
        <span class="path">~</span>
      </div>
    </div>
    <div class="line2">
      <span class="user_type">╰─ # </span>
      <input type="text" class="command_input" id="command_input">
    </div>
  `;
  terminal.appendChild(Command);
  let commandInput = document.getElementById("command_input");
  commandInput.focus();

  commandInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      commandInput.readOnly = true;
      if (commandInput.value.trim() != "") {
        let controller = new Controller(commandInput.value.trim());
        commandHistory.push(commandInput.value.trim());
        historyIndex = commandHistory.length;
      }
      // remove previous event listener
      commandInput.onkeydown = null;
      commandInput.setAttribute("tabindex", "-1");
      commandInput.removeAttribute("id");

      addCommand();
    } else if (event.key === "ArrowUp") {
      if (historyIndex > 0) {
        historyIndex--;
        commandInput.value = commandHistory[historyIndex];
      }
    } else if (event.key === "ArrowDown") {
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        commandInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        commandInput.value = "";
      }
    }
  });




}

addCommand();
