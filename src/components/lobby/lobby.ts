import './lobby.css';
import BaseComponent from '../baseComponent';
import Game from '../game/game';
import Header from '../header/header';
import Scores from '../scores/scores';
import About from '../about/about';
import { ABOUT_GAME, BEST_SCORE, GAME_SETTINGS } from '../../common/constants';

export default class Lobby extends BaseComponent {
  private readonly header: Header;

  private game: Game | null;

  private about: About | null;

  private table: BaseComponent;

  private tableWrapper: BaseComponent;

  private bestScores: Scores;

  public onStartTimer: () => void;

  // public onStopGame: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['lobby']);

    this.onStartTimer = () => {
      let isStarted = false;
      this.removeAllChildNodes(this.table.node);
      const setStarted = (started: boolean): boolean => {
        isStarted = started;

        return isStarted;
      };

      this.game = new Game(this.table.node, isStarted, setStarted);
      this.game.newGame();
    };

    window.addEventListener('score', (e: CustomEvent) => {
      this.onStopGame();
      console.log(' score e: ', e);
      console.log('lobby go to score', e.detail);
      this.bestScores = new Scores(this.table.node, e.detail);
    });

    this.header = new Header(
      this.node,
      this.onStartTimer,
      this.onStopGame,
      this.onNavClick,
    );
    this.tableWrapper = new BaseComponent(this.node, 'div', ['table-wrapper']);
    this.table = new BaseComponent(this.tableWrapper.node, 'div', ['game-table']);
    this.about = null;
  }

  removeAllChildNodes(parent: HTMLElement): void {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  onStopGame = (): void => {
    this.game?.stopGame();
    this.game = null;
    this.removeAllChildNodes(this.table.node);
  };

  onAboutGame(): void {
    console.log('GO ABOUT');
    this.removeAllChildNodes(this.table.node);
    this.about = new About(this.table.node);
  }

  onScore(): void {
    this.removeAllChildNodes(this.table.node);
    console.log('GO SCORES');
  }

  onSettings(): void {
    this.removeAllChildNodes(this.table.node);
    console.log('GO SETTINGS');
  }

  onNavClick = (navBtnName: string): void => {
    if (navBtnName === ABOUT_GAME) {
      this.onAboutGame();
    }
    if (navBtnName === BEST_SCORE) {
      this.onScore();
    }
    if (navBtnName === GAME_SETTINGS) {
      this.onSettings();
    }
  };
}
