/* eslint-disable no-underscore-dangle */
import './game.css';
import delay from '../../common/delay';
import BaseComponent from '../baseComponent';
import Card from '../card/card';
import CardsField from '../cardsField/cardsField';
import { ImageCategory, ITime } from '../../common/interfaces';
import { FILTER_RED, FLIP_DELAY, FILTER_GREEN } from '../../common/constants';
import Timer from '../timer/timer';
// import Button from '../button';
import RoundEndModal from '../roundEnd/roundEnd';

const CARDS_NUMBER = 6;
export default class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private roundEndModal: BaseComponent;

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
    super(parentNode, 'div', ['game-inner-table']);
    this.cardsField = new CardsField(this.node);
    this.timer = !isStarted && new Timer(this.cardsField.node, setStarted);
    this.timer.startTimer();
    this.numberOfSuccessTries = 0;
    this.numberOfTries = 0;
  }

  async newGame(): Promise<void> {
    const res = await fetch('../../../public/imagesAll.json');

    const categories: ImageCategory[] = await res.json();
    const cat = categories[0];
    const randomSort = () => Math.random() - 0.5;

    const images = cat.images
      .map((n) => `${cat.category}/${n}`)
      .sort(() => randomSort())
      .slice(0, CARDS_NUMBER / 2);

    this.cardsField.clear();

    const cards = images
      .concat(images)
      .sort(() => randomSort())
      .map((imgUrl) => new Card(this.cardsField.node, imgUrl));

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
      this.activeCard.addFilter(FILTER_RED);
      card.addFilter(FILTER_RED);
      await delay(FLIP_DELAY);

      await Promise.all([this.activeCard.flipBack(), card.flipBack()]);
      this.activeCard.removeFilter(FILTER_RED);
      card.removeFilter(FILTER_RED);
      console.log('çard after red filter', card);
      console.log('el of card after red f ', card.node);
    }

    if (this.activeCard.image === card.image) {
      this.activeCard.addFilter(FILTER_GREEN);
      card.addFilter(FILTER_GREEN);
      this.incrementTotalSuccesTries();
    }

    this.incrementTotalNumberOfTries();
    this.activeCard = null;
    this.isAnimation = false;

    if (this.getNumberOfSuccesTries() === this._totalCardsPair) {
      this.timer.pauseTimer();
      const totalTime = this.timer.getTotalTime();

      this.roundEndModal = new RoundEndModal(
        this.node,
        totalTime,
        this.getTotalScore(totalTime),
      );
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

  private getTotalScore(totalTime: ITime): number {
    const wrongTries = this.getNumberOfTries() - this.getNumberOfSuccesTries();
    const totalTimeInSeconds = totalTime.minutes * 60 + totalTime.seconds;

    return (this.getNumberOfTries() - wrongTries) * 100 - totalTimeInSeconds * 10;
  }

  stopGame(): void {
    this.destroy();
  }
}
