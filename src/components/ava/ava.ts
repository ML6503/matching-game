import BaseComponent from '../baseComponent';
// import * as avatar from '../../public/images/ava-icon';
import avaIcon from './avaIcon';

export default class Ava extends BaseComponent {
  private ava: string;

  constructor(parentNode: HTMLElement, avatar?: string) {
    super(parentNode, 'span', ['ava-container']);
    this.node.innerHTML = avatar
      ? `
    <img src='../../public/images/avatars/ava-user1.jpg' alt='User avatar'></img>`
      : (this.ava = avaIcon);
  }
}
