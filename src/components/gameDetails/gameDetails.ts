import './gameDetails.css';
import BaseComponent from '../baseComponent';

export default class GameDetails extends BaseComponent {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['game-details-container']);

    this.node.innerHTML = `
    <nav class="game-details">
      <div class="game-detail about-game" id="1">
        <a href="#about">
          <span class="icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="white"/>
            <path d="M8.88379 12.3965C8.89551 11.6992 8.97461 11.1484 9.12109 10.7441C9.26758 10.3398 9.56641 9.8916 10.0176 9.39941L11.1689 8.21289C11.6611 7.65625 11.9072 7.05859 11.9072 6.41992C11.9072 5.80469 11.7461 5.32422 11.4238 4.97852C11.1016 4.62695 10.6328 4.45117 10.0176 4.45117C9.41992 4.45117 8.93945 4.60938 8.57617 4.92578C8.21289 5.24219 8.03125 5.66699 8.03125 6.2002H6.40527C6.41699 5.25098 6.75391 4.48633 7.41602 3.90625C8.08398 3.32031 8.95117 3.02734 10.0176 3.02734C11.125 3.02734 11.9863 3.32617 12.6016 3.92383C13.2227 4.51562 13.5332 5.33008 13.5332 6.36719C13.5332 7.39258 13.0586 8.40332 12.1094 9.39941L11.1514 10.3486C10.7236 10.8232 10.5098 11.5059 10.5098 12.3965H8.88379ZM8.81348 15.1826C8.81348 14.9189 8.89258 14.6992 9.05078 14.5234C9.21484 14.3418 9.45508 14.251 9.77148 14.251C10.0879 14.251 10.3281 14.3418 10.4922 14.5234C10.6562 14.6992 10.7383 14.9189 10.7383 15.1826C10.7383 15.4463 10.6562 15.666 10.4922 15.8418C10.3281 16.0117 10.0879 16.0967 9.77148 16.0967C9.45508 16.0967 9.21484 16.0117 9.05078 15.8418C8.89258 15.666 8.81348 15.4463 8.81348 15.1826Z" fill="#2196F3"/>
            </svg>
          </span>
          <span class="text">about game</span>
        </a>
      </div>
      <div class="game-detail best-score" id="2">
        <a href="#scores">
          <span class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16.23 18L12 15.45L7.77 18L8.89 13.19L5.16 9.96L10.08 9.54L12 5L13.92 9.53L18.84 9.95L15.11 13.18L16.23 18Z" fill="white" fill-opacity="0.7"/>
            </svg>
          </span>
          <span class="text">best score</span>
        </a>
      </div>
      <div class="game-detail game-settings" id="3">
        <a href="#settings">
          <span class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16.23 18L12 15.45L7.77 18L8.89 13.19L5.16 9.96L10.08 9.54L12 5L13.92 9.53L18.84 9.95L15.11 13.18L16.23 18Z" fill="white" fill-opacity="0.7"/>
                <circle cx="12" cy="12" r="10" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7487 12.624C16.7727 12.424 16.7887 12.216 16.7887 12C16.7887 11.784 16.7727 11.576 16.7407 11.376L18.0927 10.32C18.2127 10.224 18.2447 10.048 18.1727 9.91201L16.8927 7.69601C16.8127 7.55201 16.6447 7.50401 16.5007 7.55201L14.9087 8.19201C14.5727 7.93601 14.2207 7.72801 13.8287 7.56801L13.5887 5.87201C13.5647 5.71201 13.4287 5.60001 13.2687 5.60001H10.7087C10.5487 5.60001 10.4207 5.71201 10.3967 5.87201L10.1567 7.56801C9.76468 7.72801 9.40468 7.94401 9.07668 8.19201L7.48468 7.55201C7.34068 7.49601 7.17268 7.55201 7.09268 7.69601L5.81268 9.91201C5.73268 10.056 5.76468 10.224 5.89268 10.32L7.24468 11.376C7.21268 11.576 7.18868 11.792 7.18868 12C7.18868 12.208 7.20468 12.424 7.23668 12.624L5.88468 13.68C5.76468 13.776 5.73268 13.952 5.80468 14.088L7.08468 16.304C7.16468 16.448 7.33268 16.496 7.47668 16.448L9.06868 15.808C9.40468 16.064 9.75668 16.272 10.1487 16.432L10.3887 18.128C10.4207 18.288 10.5487 18.4 10.7087 18.4H13.2687C13.4287 18.4 13.5647 18.288 13.5807 18.128L13.8207 16.432C14.2127 16.272 14.5727 16.056 14.9007 15.808L16.4927 16.448C16.6367 16.504 16.8047 16.448 16.8847 16.304L18.1647 14.088C18.2447 13.944 18.2127 13.776 18.0847 13.68L16.7487 12.624ZM11.9887 14.4C10.6687 14.4 9.58867 13.32 9.58867 12C9.58867 10.68 10.6687 9.60001 11.9887 9.60001C13.3087 9.60001 14.3887 10.68 14.3887 12C14.3887 13.32 13.3087 14.4 11.9887 14.4Z" fill="#2F80ED"/>
            </svg>
          </span>
        </a>
        <span class="text">game settings</span>
      </div>
    </nav>
  `;
  }
}
