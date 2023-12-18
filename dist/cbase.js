class CBase extends HTMLElement {
    constructor() {
        super();
        this.value = "";
    }
    connectedCallback() {
        var _a;
        this.value = (_a = this.getAttribute("value")) !== null && _a !== void 0 ? _a : "";
        this.render();
    }
    render() {
        this.innerHTML = `<div>${this.value}</div>`;
    }
}
customElements.define("c-base", CBase);
export { CBase };
