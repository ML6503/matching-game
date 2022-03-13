import BaseComponent from '../../baseComponent';
import './logo.css';

export default class Logo extends BaseComponent {
  constructor(parentNode:HTMLElement) {
    super(parentNode, 'div', ['logo-container']);

    this.node.innerHTML = `
    <div class="logo">
      <span class="match match-blue" >match</span>
      <span class="match match-white">match</span>
    </div>
  `;
  }
}
