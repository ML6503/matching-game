import BaseComponent from '../../baseComponent';

export default class SpanIcon extends BaseComponent {
  private span: BaseComponent;

  private icon: BaseComponent;

  private spanText: BaseComponent;

  constructor(
    parentNode: HTMLElement,
    href: string,
    iconImage: string,
    text: string,
  ) {
    super(parentNode, 'a');
    this.node.setAttribute('href', href);
    this.span = new BaseComponent(this.node, 'span', ['icon']);
    this.span.node.innerHTML = `${iconImage}`;
    this.spanText = new BaseComponent(this.node, 'span', ['text'], text);
  }
}
