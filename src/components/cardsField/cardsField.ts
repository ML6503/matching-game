import './cardsField.css';
import BaseComponent from '../baseComponent';
import Card from '../card/card';
import Wrapper from '../wrapper';
import { SHOW_TIME } from '../../common/constants';
// const IMAGE = 'camel';

// export class CardsField extends BaseComponent {
//   constructor() {
//     super('div', ['cards-field'])
//   }
// }

export default class CardsField extends BaseComponent {
  private cards: Card[] = [];

  private cardsWrapper: Wrapper;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['cards-field']);
    this.cardsWrapper = new Wrapper(this.node, 'cards');
  }

  clear(): void {
    this.cards = [];
    // this.cardsWrapper.node.innerHTML = '';
    this.cardsWrapper.destroy();
  }

  addCards(cards: Card[]): void {
    // this.element.innerHTML = `<div class='cards-wrapper'></div>`;
    this.cardsWrapper = new Wrapper(this.node, 'cards');
    this.cards = cards;
    this.cards.forEach((c) => this.cardsWrapper.node.appendChild(c.node));
    // this.cards.forEach((c: Card) => c(this.cardsWrapper.node));
    setTimeout(() => {
      this.cards.forEach((c) => c.flipBack());
    }, SHOW_TIME);
    // }, 1000);
  }
}
