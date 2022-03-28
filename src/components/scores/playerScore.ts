import BaseComponent from '../baseComponent';
import { IPlayer } from '../../common/interfaces';

export default class PlayerScore extends BaseComponent {
  private playerScore: BaseComponent;

  private playerDetails: BaseComponent;

  constructor(parentNode: HTMLElement, player: IPlayer) {
    super(parentNode, 'span', ['player-scores-container']);
    this.playerScore = new BaseComponent(this.node, 'div', ['player-score']);
    this.playerDetails = new BaseComponent(
      this.playerScore.node,
      'h5',
      ['player-name'],
      `${player.playerFirstName} ${player.playerLastName}`,
    );
  }
}
