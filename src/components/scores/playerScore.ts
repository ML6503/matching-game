import './scores.css';
import BaseComponent from '../baseComponent';
import { IPlayer } from '../../common/interfaces';
import Ava from '../ava/ava';
import Wrapper from '../wrapper';

export default class PlayerScore extends BaseComponent {
  private playerDetails: BaseComponent;

  private scoreText: BaseComponent;

  private readonly playerScore: BaseComponent;

  private playerScoreWrapper: BaseComponent;

  private playerNameWrapper: Wrapper;

  private readonly playerName: BaseComponent;

  private readonly playerEmail: BaseComponent;

  private readonly playerAvatar: Ava;

  constructor(parentNode: HTMLElement, player: IPlayer) {
    super(parentNode, 'div', ['player-scores-container']);
    this.playerDetails = new BaseComponent(this.node, 'span', ['player-details']);

    this.playerScoreWrapper = new BaseComponent(this.node, 'span', [
      'player-score-wrapper',
    ]);
    this.scoreText = new BaseComponent(
      this.playerScoreWrapper.node,
      'p',
      ['score-text'],
      'Score:',
    );
    this.playerScore = new BaseComponent(
      this.playerScoreWrapper.node,
      'span',
      ['player-score'],
      `${player.score}`,
    );
    this.playerAvatar = new Ava(this.playerDetails.node);
    this.playerNameWrapper = new Wrapper(this.playerDetails.node, 'player-name');
    this.playerName = new BaseComponent(
      this.playerNameWrapper.node,
      'h5',
      ['player-name'],
      `${player.playerFirstName} ${player.playerLastName}`,
    );
    this.playerEmail = new BaseComponent(
      this.playerNameWrapper.node,
      'p',
      ['player-email'],
      `${player.playerEmail}`,
    );
  }
}
