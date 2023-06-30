
import commands from './Commands.json' assert { type: "json" };

import { UniversalFunction } from "./UniversalFunction.js";



export class Help{
toString() {
  return commands.map(
    (command) =>
      `<pre class="whitespace-pre-wrap">
      <span class='keyword'>${command.name}</span>
      <span class='command'>↳</span>&nbsp;<span class="description">${command.description}</span>
      </pre>`
  ).join("");
 }
updateDOM(){

new UniversalFunction().updateElement("div", "output", this.toString());
}

}