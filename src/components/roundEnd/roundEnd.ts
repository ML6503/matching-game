import { ITime } from '../../common/interfaces';
import BaseComponent from '../baseComponent';
import Button from '../button';

export default class RoundEndModal extends BaseComponent {
  private roundEndPopup: BaseComponent;

  private roundEndMessage: BaseComponent;

  public modalButton: Button;

  constructor(parentNode: HTMLElement, totalTime: ITime, totalScore: number) {
    super(parentNode, 'div', ['overlay']);
    // this.roundEndModal = new BaseComponent(this.overlay.node, 'div', [
    //   'modal-content',
    // ]);
    this.roundEndPopup = new BaseComponent(this.node, 'div', ['modal-content']);
    // this.node.style.display = 'block';
    this.roundEndMessage = new BaseComponent(
      this.roundEndPopup.node,
      'p',
      ['round-end-message'],
      `Congratulations! You successfully found all matches in ${totalTime.minutes}.${totalTime.seconds} minutes.`,
    );
    this.modalButton = new Button(this.roundEndPopup.node, 'modal-close', 'ok');
    this.modalButton.onClick = () => {
      this.node.style.display = 'none';
      const scoreSent = new CustomEvent('score', { detail: totalScore });
      dispatchEvent(scoreSent);
    };
  }
}
