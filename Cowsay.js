import { UniversalFunction } from './UniversalFunction.js';


export class Cowsay {
  static async getRandomQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (response.ok) {
        return data.content;
      } else {
        throw new Error("Failed to fetch quote");
      }
    } catch (error) {
      console.error(error);
      return "Failed to fetch quote";
    }
  }

  static async getCowsayOutput() {
  const randomQuote = await Cowsay.getRandomQuote();

  const cowsayOutput = `
    <div class="cowsay-output">
      <pre>
        <span class="quote-line">________________________________________________________________________</span>
        <span class="quote-line">< </span><span class="quote-text">"${randomQuote}"</span><span class="quote-line"> ></span>
        <span class="quote-line"> ------------------------------------------------------------------------</span>
            \\   ^__^
             \\  (oo)\\_______
                (__)\\       )\\/\\
                    ||----w |
                    ||     ||
      <pre>
    </div>
  `;

  const universalFunction = new UniversalFunction();
  universalFunction.updateElement("div", "output", cowsayOutput);
}
}
