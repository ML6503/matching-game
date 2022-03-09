import BaseComponent from "./baseComponent";

export default class Ava extends BaseComponent {
  constructor(parentNode:HTMLElement) {
    super(parentNode, 'span', ['ava-container']);
    this.node.innerHTML = `
    <img src='../../public/images/avatars/ava-user1.jpg' alt='User avatar'></img>`;
  }
}
