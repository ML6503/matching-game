import './header.css';
import BaseComponent from '../baseComponent';
import Logo from './logo/logo';
import GameDetails from '../gameDetails/gameDetails';
import StartGame from './startGame/startGame';

export default class Header extends BaseComponent {
  private readonly logo: Logo;

  private readonly gameDetails: GameDetails;

  private readonly startGame: StartGame;

  constructor(
    parentNode: HTMLElement,
    onStartTimer: () => void,
    onStopGame: () => void,
    onNavClick: (arg: string) => void,
  ) {
    super(parentNode, 'div', ['header-container']);
    this.logo = new Logo(this.node);
    // this.element.appendChild(this.logo.element);
    this.gameDetails = new GameDetails(this.node, onNavClick);
    // this.element.appendChild(this.gameDetails.element);
    this.startGame = new StartGame(this.node, onStartTimer, onStopGame);
    // this.element.appendChild(this.startGame.element);
  }
}
