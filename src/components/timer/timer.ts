import './timer.css';
import BaseComponent from '../baseComponent';
import { FLIP_DELAY } from '../../common/constants';
import delay from '../../common/delay';

const TIMER_START_DELAY = FLIP_DELAY;
export default class Timer extends BaseComponent {
  private second!: number;

  private minute!: number;

  private displayedSecond: string | number;

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

  async startTimer(): Promise<void> {
    await delay(TIMER_START_DELAY);
    this.interval = setInterval(() => {
      this.second++;
      if (this.second === 60) {
        this.minute++;
        this.second = 0;
      }
      this.second < 10
        ? (this.displayedSecond = `0${this.second}`)
        : (this.displayedSecond = this.second);
      this.setTotalTime(this.minute, this.second);
      // this.second === TIMER_START_DELAY && this.stopTimer();

      this.node.innerHTML = `
      <div class="timer">
        <span class="minutes" >${this.minute}</span>
        <span class="separator" >:</span>
        <span class="seconds">${this.displayedSecond}</span>
      </div>
    `;
    }, 1000);
  }

  pauseTimer(): void {
    this.setTotalTime(this.minute, this.second);
    clearInterval(this.interval);
    this.getStarted();
  }

  stopTimer(): void {
    this.pauseTimer();
    this.second = 0;
    this.minute = 0;
    this.destroy();
  }
}
