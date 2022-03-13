import BaseComponent from '../baseComponent';
import Heading from '../heading';
import Wrapper from '../wrapper';

export default class About extends BaseComponent {
  private readonly aboutWrapper: Wrapper;

  private readonly aboutHeading: Heading;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', ['about-main-container']);
    this.aboutHeading = new Heading(this.node, 'h6', 'about', 'How to play?');
    this.aboutWrapper = new Wrapper(this.node, 'about');
    // this.element.appendChild(this.aboutHeading.element);
    // this.aboutWrapper = new Wrapper('about');
    // this.element.appendChild(this.aboutWrapper.element);
  }
}
