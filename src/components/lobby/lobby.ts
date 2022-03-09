import BaseComponent from '../baseComponent';
import Game from '../game/game';
import Header from '../header/header';
import './lobby.css';

export default class Lobby extends BaseComponent {
  private readonly header: Header;

  private game: Game;

  // public isStarted: boolean

  private table: BaseComponent;

  public onStartTimer: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['lobby']);

    this.onStartTimer = () => {
      let isStarted = false;
      const setStarted = (started: boolean): boolean => {
        isStarted = started;

        return isStarted;
      };
      console.log('IsSTARTED ', isStarted);
      this.game = new Game(this.table.node, isStarted, setStarted);
      this.game.newGame();
    };
    this.header = new Header(this.node, this.onStartTimer);
    this.table = new BaseComponent(this.node, 'div', ['table-wrapper']);
  }
}
