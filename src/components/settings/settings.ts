import BaseComponent from '../baseComponent';
import Wrapper from '../wrapper';

export default class Settings extends BaseComponent {
  private readonly settingsWrapper: Wrapper;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', ['settings-main-container']);
    this.settingsWrapper = new Wrapper(this.node, 'settings');
  }
}
