import { UniversalFunction } from "./UniversalFunction.js";

export class Socials{
    toString(){
        return `
        <div class="one-col">
            <span class='keyword'>GitHub</span>
            <span class='keyword'>LeetCode</span>
            <span class='keyword'>HackerRank</span>
            <span class='keyword'>LinkedIn</span>
            <span class='keyword'>Twitter</span>
            <span class='keyword'>Instagram</span>
        </div>
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}