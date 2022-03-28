import BaseComponent from '../baseComponent';
import './cards.css';
import { FLIP_CLASS } from '../../common/constants';

export default class Card extends BaseComponent {
  private card: BaseComponent;

  private cardFront: BaseComponent;

  private cardBack: BaseComponent;

  private cardFilter: BaseComponent;

  isFlipped = false;

  constructor(parentNode: HTMLElement, readonly image: string) {
    super(parentNode, 'div', ['card-container']);
    this.card = new BaseComponent(this.node, 'div', ['card']);
    // this.card = new BaseComponent(this.node, 'div', ['card', 'card-size']);
    this.cardFront = new BaseComponent(this.card.node, 'div', ['card-front']);
    this.cardFront.node.style.backgroundImage = `url('../../../public/images/${image}')`;
    this.cardBack = new BaseComponent(this.card.node, 'div', [
      'card-back',
      // 'card-size',
    ]);
    this.cardFilter = new BaseComponent(this.cardFront.node, 'div', ['filter']);

    // [
    //       'filter-green',
    //       'filter-size',
    //     ]

    // this.node.innerHTML = `
    // <div class="card ">
    //   <div class="card-front" style="background-image: url('../../../public/images/${image}')">
    //   <div class="filter-red filter-size"></div>
    //   </div>
    //   <div class="card-back "></div>
    // </div>

    // `;
  }

  // flipBack() {
  //   return this.element.classList.add(FLIP_CLASS);
  // }

  flipBack(): Promise<void> {
    this.isFlipped = true;
    // this.card.node.classList.add(FLIP_CLASS);
    return this.flip(true);
  }

  flipFront(): Promise<void> {
    this.isFlipped = false;
    // this.card.node.classList.remove(FLIP_CLASS);
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.node.classList.toggle(FLIP_CLASS, isFront);
      // this.card.node.classList.toggle(FLIP_CLASS, isFront);
      this.node.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }

  public addFilter(filter: string): void {
    this.cardFilter.node.classList.add(filter);
  }

  public removeFilter(filter: string): void {
    this.cardFilter.node.classList.remove(filter);
  }
}
