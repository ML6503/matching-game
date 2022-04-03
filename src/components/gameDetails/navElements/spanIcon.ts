import BaseComponent from '../../baseComponent';
import Button from '../../button';

export default class SpanIcon extends Button {
  private span: BaseComponent;

  private icon: BaseComponent;

  private spanText: BaseComponent;

  constructor(
    parentNode: HTMLElement,
    className: string,
    iconImage: string,
    text: string,
  ) {
    super(parentNode, className, '');

    this.span = new BaseComponent(this.node, 'span', ['icon']);
    this.span.node.innerHTML = `${iconImage}`;
    this.spanText = new BaseComponent(this.node, 'span', ['text-nav'], text);
  }
}
// export default class SpanIcon extends BaseComponent {
//   private span: BaseComponent;

//   private icon: BaseComponent;

//   private spanText: BaseComponent;

//   constructor(
//     parentNode: HTMLElement,
//     href: string,
//     iconImage: string,
//     text: string,
//   ) {
//     super(parentNode, 'a');
//     this.node.setAttribute('href', href);
//     this.span = new BaseComponent(this.node, 'span', ['icon']);
//     this.span.node.innerHTML = `${iconImage}`;
//     this.spanText = new BaseComponent(this.node, 'span', ['text'], text);
//   }
// }
