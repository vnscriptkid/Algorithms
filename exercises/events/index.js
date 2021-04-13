// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.eventsStore = {}
  }
  
  // Register an event handler
  on(eventName, callback) {
    if (this.eventsStore[eventName]) {
      this.eventsStore[eventName].push(callback);
    } else {
      this.eventsStore[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    const handlers = this.eventsStore[eventName];

    if (handlers) {
      handlers.forEach(handler => handler())
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if (this.eventsStore[eventName]) {
      delete this.eventsStore[eventName];
    }
  }
}

module.exports = Events;
