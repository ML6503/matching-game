/* eslint-disable no-underscore-dangle */
import './game.css';
import delay from '../../common/delay';
import BaseComponent from '../baseComponent';
import Card from '../card/card';
import CardsField from '../cardsField/cardsField';

import ImageCategory from '../../models/imageCategory';
import {
  FILTER_RED,
  FILTER,
  FLIP_DELAY,
  FILTER_GREEN,
} from '../../common/constants';
import Timer from '../timer/timer';

export default class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private overlay: BaseComponent;

  private timer: Timer;

  private numberOfTries: number;

  private numberOfSuccessTries: number;

  // private activeCard?: Card;
  private activeCard!: Card | null;

  // private activeCard2!: Card | null;
  private isAnimation = false;

  private _totalCardsPair: number;

  // constructor(parentNode: HTMLElement | null = null) {
  //   super(parentNode);
  constructor(
    parentNode: HTMLElement,
    isStarted: boolean,
    setStarted: (arg0: boolean) => typeof arg0,
  ) {
    super(parentNode, 'div', ['game-table']);
    this.overlay = new BaseComponent(this.node, 'div', ['overlay']);
    this.cardsField = new CardsField(this.node);

    console.log('we start timer');
    this.timer = !isStarted && new Timer(this.cardsField.node, setStarted);
    this.timer.startTimer();
    this.numberOfSuccessTries = 0;
    this.numberOfTries = 0;
  }

  async newGame(): Promise<void> {
    const res = await fetch('../../../public/images.json');

    const categories: ImageCategory[] = await res.json();
    const cat = categories[0];

    const images = cat.images.map((n) => `${cat.category}/${n}`);
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((imgUrl) => new Card(this.cardsField.node, imgUrl))
      .sort(() => Math.random() - 0.5);

    cards.forEach((c) => {
      c.node.addEventListener('click', () => this.cardHandler(c));
    });

    this._totalCardsPair = cards.length / 2;
    this.cardsField.addCards(cards);
  }

  public get totalCardsPair(): number {
    return this._totalCardsPair;
  }

  private set totalCardsPair(cardsPair: number) {
    this._totalCardsPair = cardsPair;
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) {
      return;
    }
    if (!card.isFlipped) {
      return;
    }
    this.isAnimation = true;

    await card.flipFront();

    if (!this.activeCard) {
      this.activeCard = card;
      //  openedCards.push(this.activeCard);

      // await card.flipFront();
      this.isAnimation = false;
      return;
    }
    if (this.activeCard.image !== card.image) {
      //  TODO RED FILTER
      // this.activeCard.showError();
      this.activeCard.node.classList.add(FILTER);
      this.activeCard.node.classList.add(FILTER_RED);
      card.node.classList.add(FILTER_RED, FILTER);
      card.node.classList.add(FILTER);
      await delay(FLIP_DELAY);
      this.activeCard.node.classList.remove(FILTER_RED);
      this.activeCard.node.classList.remove(FILTER);
      card.node.classList.remove(FILTER_RED);
      card.node.classList.remove(FILTER);
      await Promise.all([this.activeCard.flipBack(), card.flipBack()]);
    }

    if (this.activeCard.image === card.image) {
      this.activeCard.node.classList.add(FILTER_GREEN);
      this.activeCard.node.classList.add(FILTER);
      card.node.classList.add(FILTER_GREEN);
      card.node.classList.add(FILTER);
      this.incrementTotalSuccesTries();
    }

    this.incrementTotalNumberOfTries();
    // clear activeCard
    // this.activeCard = undefined;
    this.activeCard = null;
    this.isAnimation = false;

    if (this.getNumberOfSuccesTries() === this._totalCardsPair) {
      this.overlay.node.style.display = 'block';
    }
  }

  public getNumberOfTries(): number {
    return this.numberOfTries;
  }

  public getNumberOfSuccesTries(): number {
    return this.numberOfSuccessTries;
  }

  private incrementTotalNumberOfTries(): void {
    this.numberOfTries += 1;
  }

  private incrementTotalSuccesTries(): void {
    this.numberOfSuccessTries += 1;
  }

  // stopGame() {
  //   this.cardsField.clear();
  // }
}
