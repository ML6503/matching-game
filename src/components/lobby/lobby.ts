import BaseComponent from '../baseComponent';
import Game from '../game/game';
import Header from '../header/header';
import './lobby.css';

export default class Lobby extends BaseComponent {
  private readonly header: Header;

  private game: Game;

  private table: BaseComponent;

  private tableWrapper: BaseComponent;

  public onStartTimer: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['lobby']);

    this.onStartTimer = () => {
      let isStarted = false;
      const setStarted = (started: boolean): boolean => {
        isStarted = started;

        return isStarted;
      };

      this.game = new Game(this.table.node, isStarted, setStarted);
      this.game.newGame();
    };
    this.header = new Header(this.node, this.onStartTimer);
    this.tableWrapper = new BaseComponent(this.node, 'div', ['table-wrapper']);
    this.table = new BaseComponent(this.tableWrapper.node, 'div', ['game-table']);
  }
}
