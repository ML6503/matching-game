import './startGame.css';
import Ava from '../../ava/ava';
import BaseComponent from '../../baseComponent';
import Button from '../../button';
import Wrapper from '../../wrapper';
import { START_GAME, STOP_GAME } from '../../../common/constants';

export default class StartGame extends BaseComponent {
  private startGameButton: Button;

  private ava: Ava;

  private avaWrapper: Wrapper;

  constructor(
    parentNode: HTMLElement,
    onStartTimer: () => void,
    onStopGame: () => void,
  ) {
    super(parentNode, 'div', ['start-game-container']);
    let buttonText = START_GAME;
    this.startGameButton = new Button(this.node, 'start-game', buttonText);

    this.startGameButton.onClick = () => {
      onStartTimer();
      buttonText = STOP_GAME;
      this.startGameButton.node.textContent = buttonText;
      // this.startGameButton.node.setAttribute ('disabled', '');
    };

    if (this.startGameButton.node.textContent === STOP_GAME) {
      this.startGameButton.onClick = () => onStopGame();
    }

    this.avaWrapper = new Wrapper(this.node, 'ava');

    this.ava = new Ava(this.avaWrapper.node);
  }
}
