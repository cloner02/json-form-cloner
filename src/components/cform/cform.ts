import { CBase } from "../cbase/cbase.js";

export class CForm extends CBase {
    bodyjson: string;
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

  declare global {
    interface HTMLElementTagNameMap {
      "c-form": CForm,
    }
  }