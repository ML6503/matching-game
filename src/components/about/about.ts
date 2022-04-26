import '../cardsField/cardsField';
import './about.css';
import BaseComponent from '../baseComponent';
import Heading from '../heading';
import Wrapper from '../wrapper';
import { stepsText } from './stepsText';
import Step from './step';

export default class About extends BaseComponent {
  private aboutWrapper: Wrapper;

  private stepWrapper: Wrapper;

  private stepsWrapper: Wrapper[];

  private readonly aboutHeading: Heading;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'section', ['cards-field', 'about-main-container']);
    this.aboutHeading = new Heading(this.node, 'h6', 'about', 'How to play?');
    this.aboutWrapper = new Wrapper(this.node, 'about');
    stepsText.forEach(
      (step) => new Step(this.aboutWrapper.node, step.id, step.description),
    );

    // this.element.appendChild(this.aboutHeading.element);
    // this.aboutWrapper = new Wrapper('about');
    // this.element.appendChild(this.aboutWrapper.element);
  }
}
