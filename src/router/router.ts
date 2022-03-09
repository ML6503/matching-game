// import About from "../components/about/about";
// import Game from "../components/game/game";
// import Scores from "../components/scores/scores";
// import Settings from "../components/settings/settings";

// declare const IRroute: { component: typeof Function, name: string }

// export default class Router {
//   // window: Window & typeof globalThis;

//   private readonly about: About;
//   private readonly game: Game;
//   private readonly settings: Settings;
//   private readonly scores: Scores;
//   // public routes: { component: () => About | Game | Settings | Scores  , name: string }[]
//     // declare IRroute: { component: typeof Function, name: string }
//  public  routes: Array< { component: () => void | HTMLElement, name: string }>

//   container: HTMLElement;

//   constructor() {

//     this.game = new Game();
//     // this.game = new Game(this.rootElement);
//     this.about= new About();
//     this.settings= new Settings();
//     this.scores= new Scores();
//     this.container =  document.querySelector<HTMLElement>('#app')!;
//     this.routes = [
//       {
//         'name': 'game',
//         'component': () => this.container.append(this.game.element)
//       },
//       {
//         'name': 'settings',
//         'component': () => this.container.append(this.settings.element)
//       },
//       {
//         'name': 'scores',
//         'component': () => this.container.append(this.scores.element)
//       }
//     ];

//   }

//     start() {

//      const defaultRoute = {
//         'name': 'about',
//         'component': () => this.container.append(this.about.element)
//         };

//       window.onpopstate = () => {
//         console.log('onpopstate', window.location);
//         let currentRouteName = window.location.hash.slice(1);
//         let currentRoute = this.routes.find(r => r.name === currentRouteName);
//         // let defaultRoute = this.routes.find(r => r.name === 'about');

//         (currentRoute || defaultRoute).component();

//       };
//       //window.onpopstate();

//     }

// }
