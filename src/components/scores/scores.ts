import BaseComponent from "../baseComponent";
import Heading from "../heading";
import Wrapper from "../wrapper";

export default class Scores extends BaseComponent {
  private readonly scoresWrapper: Wrapper;
  private readonly scoresHeading: Heading;


  constructor(parentNode: HTMLElement) {
    super(parentNode,'section', ['scores-main-container']);
    this.scoresHeading = new Heading(this.node, 'h6','scores', 'Best Players');
    this.scoresWrapper = new Wrapper(this.node, 'scores');

  }
}
