import './startGame.css';
import Ava from '../../ava/ava';
import BaseComponent from '../../baseComponent';
import Button from '../../button';
import Wrapper from '../../wrapper';
import { START_GAME, STOP_GAME } from '../../../common/constants';

export default class StartGame extends BaseComponent {
  private startGameButton: Button;

  private stopGameButton: Button;

  private ava: Ava;

  private avaWrapper: Wrapper;

  constructor(
    parentNode: HTMLElement,
    onStartTimer: () => void,
    onStopGame: () => void,
  ) {
    super(parentNode, 'div', ['start-game-container']);
    let gameStart = false;
    this.startGameButton = new Button(this.node, 'start-game', START_GAME);
    this.stopGameButton = new Button(this.node, 'stop-game', STOP_GAME);
    this.stopGameButton.node.style.display = 'none';

    this.startGameButton.onClick = () => {
      if (!gameStart) {
        onStartTimer();
        gameStart = !gameStart;

        this.startGameButton.node.style.display = 'none';
        this.stopGameButton.node.style.display = 'block';
      }

      this.stopGameButton.onClick = () => {
        if (gameStart) {
          onStopGame();
          gameStart = !gameStart;

          this.startGameButton.node.style.display = 'block';
          this.stopGameButton.node.style.display = 'none';
        }
      };
    };

    this.avaWrapper = new Wrapper(this.node, 'ava');

    this.ava = new Ava(this.avaWrapper.node);
  }
}
