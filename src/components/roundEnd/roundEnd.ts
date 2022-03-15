import BaseComponent from '../baseComponent';
import Button from '../button';

export default class RoundEndModal extends BaseComponent {
  private roundEndMessage: BaseComponent;

  public modalButton: Button;

  constructor(
    parentNode: HTMLElement,
    totalTime: { minutes: string; seconds: string },
  ) {
    super(parentNode, 'div', ['modal-content']);
    // this.roundEndModal = new BaseComponent(this.overlay.node, 'div', [
    //   'modal-content',
    // ]);
    this.roundEndMessage = new BaseComponent(
      parentNode,
      'p',
      ['round-end-message'],
      `Congratulations! You successfully found all matches on ${totalTime} minutes.`,
    );
    this.modalButton = new Button(this.node, 'modal-close', 'ok');
    this.modalButton.onClick = () => {
      // parentNode.style.display = 'none';
    };
  }
}
