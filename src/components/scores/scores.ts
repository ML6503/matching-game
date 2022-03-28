import '../cardsField/cardsField.css';
import './scores.css';
import BaseComponent from '../baseComponent';
import Heading from '../heading';
import Wrapper from '../wrapper';
import { IPlayer } from '../../common/interfaces';

const players: IPlayer[] = [
  {
    id: 0,
    playerFirstName: 'FirstName',
    playerLastName: 'LastName',
    playerEmail: 'email@com',
    score: 0,
  },
];
export default class Scores extends BaseComponent {
  private readonly scoresWrapper: Wrapper;

  private readonly scoresHeading: Heading;

  constructor(parentNode: HTMLElement, score: number) {
    super(parentNode, 'section', ['scores-main-container']);

    this.scoresWrapper = new Wrapper(this.node, 'scores');
    this.scoresHeading = new Heading(
      this.scoresWrapper.node,
      'h6',
      'scores',
      'Best Players',
    );
    console.log('BEST SCORES and current is', score);
    players.map((player) => new PlayerScore(this.scoresWrapper.node, player));
  }
}
