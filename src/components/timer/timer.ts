import './timer.css';
import BaseComponent from '../baseComponent';
import { SHOW_TIME } from '../../common/constants';

const TIMER_TIME = SHOW_TIME / 1000;
export default class Timer extends BaseComponent {
  private second!: number;

  private minute!: number;

  public totalTime!: {
    minutes: number;
    seconds: number;
  };

  private interval!: ReturnType<typeof setInterval>;

  getStarted: () => void;

  constructor(parentNode: HTMLElement, setStarted: (arg0: boolean) => typeof arg0) {
    super(parentNode, 'div', ['timer-wrapper']);
    this.second = 0;
    this.minute = 0;
    this.totalTime = {
      // 'minutes': 0,
      // 'seconds': 0
      minutes: 0,
      seconds: 0,
    };

    this.getStarted = () => setStarted(true);
  }

  // getStarted = (started: true | false): boolean => started

  setTotalTime(minutes: number, seconds: number): void {
    this.totalTime.minutes = minutes;
    this.totalTime.seconds = seconds;
  }

  getTotalTime(): { minutes: number; seconds: number } {
    return this.totalTime;
  }

  startTimer(): void {
    console.log('we are in startTimer');

    this.interval = setInterval(() => {
      // this.element.innerHTML = this.minute+"mins "+  this.second+"secs";

      this.second++;
      if (this.second === 60) {
        this.minute++;
        this.second = 0;
      }
      this.setTotalTime(this.minute, this.second);
      this.second === TIMER_TIME && this.stopTimer();
      console.log('this.second', this.second);
      console.log('time sec', this.getTotalTime().seconds);
      this.node.innerHTML = `
      <div class="timer">
        <span class="minutes" >${this.minute}</span>
        <span class="separator" >:</span>
        <span class="seconds">${this.second}</span>
      </div>
    `;
    }, 1000);
  }

  stopTimer(): void {
    this.setTotalTime(this.minute, this.second);
    this.second = 0;
    this.minute = 0;
    clearInterval(this.interval);
    this.getStarted();
    this.destroy();
  }
}
