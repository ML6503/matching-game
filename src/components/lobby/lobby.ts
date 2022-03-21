import './lobby.css';
import BaseComponent from '../baseComponent';
import Game from '../game/game';
import Header from '../header/header';
import Scores from '../scores/scores';

export default class Lobby extends BaseComponent {
  private readonly header: Header;

  private game: Game;

  private table: BaseComponent;

  private tableWrapper: BaseComponent;

  private bestScores: Scores;

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
    window.addEventListener('score', (e: CustomEvent) => {
      this.game.stopGame();
      console.log('lobby go to score', e.detail);
      this.bestScores = new Scores(this.table.node, e.detail);
    });
    this.header = new Header(this.node, this.onStartTimer);
    this.tableWrapper = new BaseComponent(this.node, 'div', ['table-wrapper']);
    this.table = new BaseComponent(this.tableWrapper.node, 'div', ['game-table']);
  }
}
