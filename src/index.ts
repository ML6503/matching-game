import './styles.css'

// import App from './app';
import Application from './application'

window.onload = () => {
  // new App(document.body);
  const appElement = document.getElementById('app')

  if (!appElement) {
    throw Error('App root element not found')
  }
  // new App(appElement).start();
  new Application(appElement)
}
