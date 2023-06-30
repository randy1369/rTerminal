import { UniversalFunction } from "./UniversalFunction.js";

export class About {
  toString() {
    return `
      <div class="about-container">
        <p class="about-line">01001000 01101001 👋 I'm Rocks</p>
        <p class="about-line">A self-taught web developer based in Hyderabad, India.</p>
        <p class="about-line">I am passionate about writing code and developing web applications to solve real-life challenges</p>
        <p class="about-line">and have a natural curiosity to explore all aspects of technology. 🧑‍💻</p>
        <p class="about-line">My interests include DSA, Scripting, Machine Learning, AI, Blockchain, Cryptocurrency.</p>
        <p class="about-line">I believe that having a diverse range of interests and experiences helps me bring a unique perspective to my work.</p>
        <p class="about-line"><b>Thank you for taking the time to learn a little bit about me! 😊</b></p>
      </div>
    `;
  }

  updateDOM() {
    new UniversalFunction().updateElement("div", "output", this.toString());
  }
}


