import './gameDetails.css';
import BaseComponent from '../baseComponent';
import AboutGame from './navElements/aboutGameRoute';
import ScoreRoute from './navElements/scoreRoute';
import SettingsRoute from './navElements/settingsRoute';

export default class GameDetails extends BaseComponent {
  private headerRouter: BaseComponent;

  private aboutGameRoute: AboutGame;

  private scoreRoute: ScoreRoute;

  private settingsRoute: SettingsRoute;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['game-details-container']);
    this.headerRouter = new BaseComponent(this.node, 'nav', ['game-details']);
    this.aboutGameRoute = new AboutGame(this.headerRouter.node);
    this.scoreRoute = new ScoreRoute(this.headerRouter.node);
    this.settingsRoute = new SettingsRoute(this.headerRouter.node);
  }
}
