import BaseComponent from "./baseComponent";

export default class Heading extends BaseComponent {

  constructor(parentNode: HTMLElement, headingName: keyof HTMLElementTagNameMap, className: string, textContent = '') {
    super(parentNode,`${headingName}`, [`${className}-heading`], textContent);
  };
}
