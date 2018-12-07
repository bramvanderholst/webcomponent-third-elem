import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class ThirdElem extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
        margin-top: 1px;
      }
    </style>
`;
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('third!');
  }

  static get properties() {
    return {}
  }

  static get observers() {
    return []
  }
}

customElements.define('third-elem', ThirdElem);
