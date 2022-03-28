import BaseComponent from '../../baseComponent';
import ScoreIcon from './scoreIcon';
import SpanIcon from './spanIcon';

export default class ScoreRoute extends BaseComponent {
  private scoreNav: SpanIcon;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['game-detail', 'best-score']);
    this.node.setAttribute('id', '2');
    window.addEventListener('score', (e: CustomEvent) => {
      console.log('best score page', e.detail);

      this.node.classList.add('active-router');
    });
    this.scoreNav = new SpanIcon(this.node, '#scores', ScoreIcon, 'best score');
  }
}
