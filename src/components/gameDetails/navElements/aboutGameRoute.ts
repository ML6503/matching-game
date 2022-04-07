import BaseComponent from '../../baseComponent';
import AboutIcon from './aboutIcon';
import SpanIcon from './spanIcon';

export default class AboutGame extends BaseComponent {
  private readonly aboutNav: SpanIcon;

  constructor(parentNode: HTMLElement, onNavClick: (arg: string) => void) {
    super(parentNode, 'div', ['game-detail', 'about-game']);
    this.node.setAttribute('id', '1');
    this.aboutNav = new SpanIcon(
      this.node,
      'about',
      AboutIcon,
      'about game',
      onNavClick,
    );
  }
}
