import { CBase } from "../cbase/cbase";
export class CInput extends CBase {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `<input value='${this.value}'></input>`;
    }
}
customElements.define("c-input", CInput);
