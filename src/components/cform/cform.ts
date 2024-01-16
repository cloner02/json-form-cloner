import { CBase, IProperties } from "../cbase/cbase.js";

interface IPropertiesForm extends IProperties {
  bodyjson: string,
}

export class CForm extends CBase {
    bodyjson: string;
    static observedAttributes = ["value","bodyjson"];
    constructor() {
      super();
      this.bodyjson = "{}";
    }

    getTemplate(): HTMLTemplateElement {
      const template = document.createElement("template");
      template.innerHTML = `
        <form>${this.bodyjson}</form>
      `;
      return template;
    }
  
    connectedCallback(): void {
      this.bodyjson = this.getAttribute("bodyjson") ?? this.bodyjson;
      this.render();
    }

    adoptedCallback(): void {
      console.log("adoptedCallback");
    }

    attributeChangedCallback(name:any, oldValue:any, newValue:any): void {
      super.attributeChangedCallback(name, oldValue, newValue);
      console.log("attributeChangedCallback");
    }

    render(): void {
      super.render();
    }
  }
  
  customElements.define("c-form", CForm);

  declare global {
    interface HTMLElementTagNameMap {
      "c-form": CForm,
    }
  }