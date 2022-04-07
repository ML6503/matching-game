import BaseComponent from './baseComponent';

export default class Button extends BaseComponent {
  public onClick!: () => void;

  node!: HTMLButtonElement;

  constructor(parentNode: HTMLElement, className: string, textContent: string) {
    super(parentNode, 'button', [`${className}-button`], textContent);
    this.node.onclick = () => {
      this.onClick();
    };
  }
}
