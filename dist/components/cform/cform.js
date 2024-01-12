import { CBase } from "../cbase/cbase";
export class CForm extends CBase {
    bodyjson;
    constructor() {
        super();
        this.bodyjson = "{}";
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `<form>${this.value}</form>`;
    }
}
customElements.define("c-form", CForm);
