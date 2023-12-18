export class CBase extends HTMLElement {
    value;
    constructor() {
        super();
        this.value = "";
    }
    connectedCallback() {
        this.value = this.getAttribute("value") ?? "";
        this.render();
    }
    render() {
        this.innerHTML = `<div>${this.value}</div>`;
    }
}
customElements.define("c-base", CBase);
