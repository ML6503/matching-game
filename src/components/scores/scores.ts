// import '../cardsField/cardsField.css';
import './scores.css';
import BaseComponent from '../baseComponent';
import Heading from '../heading';
import Wrapper from '../wrapper';
import { IPlayer } from '../../common/interfaces';
import PlayerScore from './playerScore';

const players: IPlayer[] = [
  {
    id: 0,
    ava: '',
    playerFirstName: 'FirstName',
    playerLastName: 'LastName',
    playerEmail: 'email@com',
    score: 0,
  },

  {
    id: 1,
    playerFirstName: '2nd Player FirstName',
    playerLastName: '2nd player LastName',
    playerEmail: '2nd player email@com',
    score: 10,
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
