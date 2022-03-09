import BaseComponent from './components/baseComponent';
import Lobby from './components/lobby/lobby';

export default class Application extends BaseComponent {
  lobby: Lobby;

  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.lobby = new Lobby(this.node);
    // this.startGame()
  }

  // private startGame() {
  //   // const lobby = new Lobby(this.node);
  // }
}
