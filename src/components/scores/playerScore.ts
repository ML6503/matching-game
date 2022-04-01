import './scores.css';
import BaseComponent from '../baseComponent';
import { IPlayer } from '../../common/interfaces';
import Ava from '../ava';
import Wrapper from '../wrapper';

export default class PlayerScore extends BaseComponent {
  private playerDetails: BaseComponent;
 
  private playerScore: BaseComponent;

  private playerNameWrapper: Wrapper;

  private readonly playerName: BaseComponent;

  private readonly playerEmail: BaseComponent;

  private readonly playerAvatar: Ava;

  constructor(parentNode: HTMLElement, player: IPlayer) {
    super(parentNode, 'span', ['player-scores-container']);
    this.playerDetails = new BaseComponent(this.node, 'div', ['player-details']);
    
    this.playerScore = new BaseComponent(this.node, 'div', ['player-score']);
    this.playerAvatar = new Ava( this.playerDetails.node);
    this.playerNameWrapper = new Wrapper(this.playerDetails.node, 'player-name')
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
