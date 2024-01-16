export interface IProperties {
  value: string,
  getTemplate(): HTMLTemplateElement,
}

export class CBase extends HTMLElement implements IProperties {
    value: string;
    static observedAttributes = ["value"];
    constructor() {
      
      super();
      this.value = "";
      this.attachShadow({ mode: "open" });
    }

    getTemplate(): HTMLTemplateElement {
      const template = document.createElement("template");
      template.innerHTML = `
        <div>${this.value}</div>
      `;
      return template;
    }

    [key: string]: any; // Add index signature to allow indexing with a string parameter

    applyValues(): void {
      let listProperties: Array<string> = Object.getOwnPropertyNames(this);
      listProperties.forEach((property:string) => 
      {
        let attributeValue = this.attributes.getNamedItem(property)?.value;
        if(attributeValue !== undefined)
          this[property] = attributeValue;
      });

    }
  
    connectedCallback(): void {
      this.applyValues();
      this.render();
    }

    adoptedCallback(): void {
      console.log("adoptedCallback");
    }

    attributeChangedCallback(name:any, oldValue:any, newValue:any): void {
      if(name == "value")
      {
        console.log("attributeChangedCallback value");
      }
    }
  
  
    render() {
      this.shadowRoot?.append(document.importNode(this.getTemplate().content,true));
    }
  }
  
  customElements.define("c-base", CBase);

  declare global {
    interface HTMLElementTagNameMap {
      "c-base": CBase,
    }
  }