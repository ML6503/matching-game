import BaseComponent from './baseComponent';

export default class Wrapper extends BaseComponent {
  constructor(parentNode:HTMLElement, className: string) {
    super(parentNode, 'div', [`${className}-wrapper`]);
  }
}
