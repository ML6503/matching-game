import BaseComponent from '../baseComponent';

export default class RegisterInput extends BaseComponent {
  private input: BaseComponent;

  private label: BaseComponent;

  constructor(parentNode: HTMLElement, input: string) {
    super(parentNode, 'div', ['register-input-wrapper']);

    this.label = new BaseComponent(this.node, 'label', ['register-input-label']);
    this.label.node.setAttribute('for', 'inputField');
    this.label.node.textContent = input;
    this.input = new BaseComponent(this.node, 'input', ['register-input']);
    this.input.node.setAttribute('type', 'text');
    this.input.node.setAttribute('id', 'inputField');
    // this.input.node.setAttribute('data-placeholder', input);
    // this.input.node.addEventListener('focus', () => {
    //   this.node.classList.add('active');
    // });

    // this.input.node.addEventListener('blur', () => {
    //   this.node.classList.remove('active');
    // });
  }
}
