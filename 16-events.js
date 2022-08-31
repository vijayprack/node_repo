const EventEmitter = require('events')
const costomEmitter = new EventEmitter()

costomEmitter.on('responce', (name, id) => {
  console.log(`Data recived user ${name} with id: ${id}`);
});

costomEmitter.on('responce', () => {
  console.log(`Other Data`);
});

costomEmitter.emit('responce', 'Vijay', 26);