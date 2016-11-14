'use strict';

// An ES-6 Class
class TrafficLight {
  constructor(name) {
    this.state = 'red';
    this.name = name;
  }
  getName()  {
    return this.name;
  }
  getState() {
    return this.state;
  }
  goGreen()  {
    this.state = 'green';
  }
  goYellow() {
    this.state = 'yellow';
  }
  goRed()    {
    this.state = 'red';
  }
  toString() {
    return this.getName() + ' is ' + this.getState();
  }
}

let trafficLight1 = new TrafficLight('North Ave and Peachtree');
console.log(trafficLight1.toString());
trafficLight1.goYellow();
console.log(trafficLight1.toString());
trafficLight1.state = 'purple';
console.log(trafficLight1.toString());
