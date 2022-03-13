// // import   CardsField from "./components/cardsField/cardsField";
// // import About from './components/about/about'
// import Game from './components/game/game'
// import Header from './components/header/header'
// // import Scores from './components/scores/scores'
// // import Settings from './components/settings/settings'
// import ImageCategory from './models/imageCategory'
// // import Router from './router/router'
// // export class App {
// //   private readonly cardsField: CardsField;

// //   constructor(private readonly rootElement: HTMLElement) {
// //     this.cardsField = new CardsField();
// //     this.rootElement.appendChild(this.cardsField.element);
// //   }
// // }

// export default class App {
//   // private readonly cardsField: CardsField;
//   private readonly header: Header

//   // private readonly about: About;
//   private readonly game: Game

//   // private readonly settings: Settings;
//   // private readonly scores: Scores;
//   public parentNode: HTMLElement | null = null

//   // private router: Router

//   private isStarted: boolean

//   constructor(private readonly rootElement: HTMLElement) {
//     // this.router = new Router()
//     // this.cardsField = new CardsField(this.rootElement);
//     this.isStarted = false
//     // this.header = new Header(this.onStartTimer)
//     // rootElement.appendChild(this.header.element);
//     // this.rootElement.parentNode
//       // && this.rootElement.parentNode.insertBefore(this.header.element, rootElement)
//     // this.game = new Game(this.getStarted)
//     // rootElement.appendChild(this.game.element)
//     // // this.game = new Game(this.rootElement);
//     // this.about= new About();
//     // this.settings= new Settings();
//     // this.scores= new Scores();

//     console.log('rootElement', this.rootElement.parentNode)
//   }

//   //  start() {
//   //   // history.pushState(null, '#about')
//   //   location.hash = '#about';
//   //   window.history.back();
//   //   this.router.start();

//   // }
//   onStartTimer() {
//     return (this.isStarted = true)
//   }

//   getStarted() {
//     return this.isStarted
//   }

//   async start() {
//     const res = await fetch('./images.json')

//     const categories: ImageCategory[] = await res.json()
//     const cat = categories[0]

//     const images = cat.images.map((n) => `${cat.category}/${n}`)

//     return this.game.newGame(images)
//   }
// }
