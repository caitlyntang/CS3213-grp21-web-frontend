import { io } from 'socket.io-client';

class SocketService {
  constructor() {
    this.socket = null;
    this.listeners = new Map();
  }

  connect(serverUrl = 'http://localhost:3000') {
    if (this.socket) {
      this.socket.disconnect();
    }

    this.socket = io(serverUrl);
    
    this.socket.on('connect', () => {
      console.log('Connected to database server');
    });
    
    this.socket.on('disconnect', () => {
      console.log('Disconnected from database server');
    });
    
    // Set up listeners for database logs
    this.socket.on('database-log', (log) => {
      console.log('Database log received:', log);
      this.notifyListeners('database-log', log);
    });
    
    return this;
  }

  subscribe(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
    
    return () => this.unsubscribe(event, callback);
  }

  unsubscribe(event, callback) {
    if (!this.listeners.has(event)) return;
    
    const listeners = this.listeners.get(event);
    const index = listeners.indexOf(callback);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  }

  notifyListeners(event, data) {
    if (!this.listeners.has(event)) return;
    
    this.listeners.get(event).forEach(callback => {
      callback(data);
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

export default new SocketService();