export default class Queue {
  constructor(queueData = []) {
    this.Queue = queueData;
  }
  enQueue(val) {
    this.Queue.unshift(val);
  }
  deQueue() {
    return this.Queue.shift();
  }
  isEmpty() {
    return this.Queue.length === 0;
  }
  printQueue() {
    var str = "";
    this.Queue.forEach(element => {
      str = `${str} ${element}`;
    });
    return str;
  }
  getSize() {
    return this.Queue.length;
  }

}