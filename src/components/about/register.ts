import './about.css';
import BaseComponent from '../baseComponent';
import Heading from '../heading';
import Wrapper from '../wrapper';
import { registerText } from './stepsText';
import RegisterInput from './registerInput';

export default class Register extends BaseComponent {
  private registerWrapper: Wrapper;

  private registerInputWrapper: Wrapper;

  private registerInputContainer: BaseComponent;

  private readonly aboutHeading: Heading;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['register-container']);
    this.registerWrapper = new Wrapper(this.node, 'register');
    this.registerInputWrapper = new Wrapper(
      this.registerWrapper.node,
      'register-input',
    );
    this.aboutHeading = new Heading(
      this.registerInputWrapper.node,
      'h6',
      'register',
      'Register new Player',
    );
    this.registerInputContainer = new BaseComponent(
      this.registerInputWrapper.node,
      'div',
      ['register-input-container'],
    );
    registerText.forEach(
      (input) => new RegisterInput(this.registerInputContainer.node, input),
    );
  }
}
