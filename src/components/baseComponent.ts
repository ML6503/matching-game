// export default class BaseComponent {
//   readonly element: HTMLElement;

//   constructor(tag = 'div', styles: string[] = [], textContent = '') {
//     this.element = document.createElement(tag);
//     this.element.classList.add(...styles);
//     this.element.innerHTML = textContent;
//   }
// }

class BaseComponent<NodeType extends HTMLElement = HTMLElement> {
  public node: NodeType;

  constructor(
    parentNode: HTMLElement | null = null,
    tag = 'div',
    styles: string[] = [],
    textContent = '',
  ) {
    const element = document.createElement(tag);
    element.classList.add(...styles);
    element.textContent = textContent;
    parentNode && parentNode.append(element);
    this.node = element as NodeType;
  }

  destroy(): void {
    this.node.remove();
  }
}

export default BaseComponent;
