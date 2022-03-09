import BaseComponent from '../baseComponent';
import './cards.css';
import { FLIP_CLASS } from '../../common/constants';

export default class Card extends BaseComponent {
  isFlipped = false;

  constructor(parentNode: HTMLElement, readonly image: string) {
    super(parentNode, 'div', ['card-container']);

    this.node.innerHTML = `
    <div class="card">
      <div class="card-front" style="background-image: url('../../../public/images/${image}')"></div>
      <div class="card-back"></div>
    </div>
    `;
  }

  // flipBack() {
  //   return this.element.classList.add(FLIP_CLASS);
  // }

  flipBack(): Promise<void> {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipFront(): Promise<void> {
    this.isFlipped = false;
    // return this.element.classList.remove(FLIP_CLASS);
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.node.classList.toggle(FLIP_CLASS, isFront);
      this.node.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }
}
