import htmlCreator from "./htmlCreator.js";

const render = entries => {
    const container = document.querySelector("#container");
    container.innerHTML = ""
    entries.forEach(entry => {
        const html = htmlCreator(entry);
        container.innerHTML += html;
    });
};

export default render;