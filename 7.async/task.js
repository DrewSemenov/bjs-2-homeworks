'use strict';

class AlarmClock {
  constructor() {
    this.intervalId = null;
    this.alarmCollection = [];
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.find((el) => el.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({ callback, time, canCall: true });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (el) => el.time !== time
    );
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString([], { timeStyle: 'short' });
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((el) => {
        if (el.canCall && el.time === this.getCurrentFormattedTime()) {
          el.canCall = false;
          el.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((el) => (el.canCall = true));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
