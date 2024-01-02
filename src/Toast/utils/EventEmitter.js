class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, data) {
    const eventSubscribers = this.events[event];
    if (eventSubscribers) {
      eventSubscribers.forEach(callback => callback(data));
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export const toastEmitter = new EventEmitter();
