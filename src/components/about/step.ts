import BaseComponent from '../baseComponent';
import Wrapper from '../wrapper';
import './about.css';

export default class Step extends Wrapper {
  private stepNumberContainer: BaseComponent;

  private stepDescriptionWrapper: Wrapper;

  private stepSampleWrapper: Wrapper;

  private stepIcon: BaseComponent;

  private readonly stepNumber: BaseComponent;

  private stepDescriptionContainer: BaseComponent;

  private readonly stepDescription: BaseComponent;

  private stepSampleContainer: BaseComponent;

  constructor(parentNode: HTMLElement, id: number, text: string) {
    super(parentNode, 'step');
    this.stepDescriptionWrapper = new Wrapper(this.node, 'step-descr');
    this.stepNumberContainer = new BaseComponent(
      this.stepDescriptionWrapper.node,
      'span',
      ['step-num-container'],
    );
    this.stepIcon = new BaseComponent(this.stepNumberContainer.node, 'div', [
      'step-icon',
    ]);
    this.stepNumber = new BaseComponent(
      this.stepIcon.node,
      'p',
      ['step-number'],
      `${id}`,
    );
    this.stepDescriptionContainer = new BaseComponent(
      this.stepDescriptionWrapper.node,
      'span',
      ['step-descr-container'],
    );
    this.stepDescription = new BaseComponent(
      this.stepDescriptionContainer.node,
      'p',
      ['step-description'],
      text,
    );
    this.stepSampleWrapper = new Wrapper(this.node, 'step-sample');
    if (id === 1) {
      this.stepSampleContainer = new BaseComponent(
        this.stepSampleWrapper.node,
        'div',
        ['step-sample-container'],
      );
    }
  }
}
