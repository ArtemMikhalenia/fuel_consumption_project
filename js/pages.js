import { MainTitle, AddBlock, ListBlock, RichyBlock } from "./components.js";

const Page = {
	id: "page",
	title: "Помощь бездомным животным Солигорска",
	render: () => {
		return `
    <main class="main-container">
      ${MainTitle.render()}
      ${RichyBlock.render()}
      ${AddBlock.render()}
      ${ListBlock.render()}
    </main>`;
	},
};

export { Page };
