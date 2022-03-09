import './startGame.css';
import Ava from '../../ava';
import BaseComponent from '../../baseComponent';
import Button from '../../button';
import Wrapper from '../../wrapper';

export default class StartGame extends BaseComponent {
  private startGameButton: Button;

  private ava: Ava;

  private avaWrapper: Wrapper;

  constructor(parentNode: HTMLElement, onStartTimer: () => void) {
    super(parentNode, 'div', ['start-game-container']);
    let buttonText = 'start game';
    this.startGameButton = new Button(this.node, 'start-game', buttonText);

    this.startGameButton.onClick = () => {
      onStartTimer();
      buttonText = 'stop game';
      this.startGameButton.node.textContent = buttonText;
      this.startGameButton.node.setAttribute('disabled', '');
    };

    this.avaWrapper = new Wrapper(this.node, 'ava');

    this.ava = new Ava(this.avaWrapper.node);
  }
}
