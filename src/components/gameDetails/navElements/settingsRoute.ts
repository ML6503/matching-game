import BaseComponent from '../../baseComponent';
import SettingsIcon from './settingsIcon';
import SpanIcon from './spanIcon';

export default class AboutGame extends BaseComponent {
  private aboutNav: SpanIcon;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['game-detail', 'game-settings']);
    this.node.setAttribute('id', '3');
    this.aboutNav = new SpanIcon(
      this.node,
      'settings',
      SettingsIcon,
      'game settings',
    );
  }
}
