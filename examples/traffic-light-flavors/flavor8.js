'use strict';

// IIFE that returns an ES-6 Class
const TrafficLight = () => {
  let state = 'red';
  class TrafficLight {
    constructor(name) {
      this.name = name;
    }
    getName()  {
      return this.name;
    }
    getState() {
      return state;
    }
    goGreen()  {
      state = 'green';
    }
    goYellow() {
      state = 'yellow';
    }
    goRed()    {
      state = 'red';
    }
    toString() {
      return this.getName() + ' is ' + this.getState();
    }
  }
  return TrafficLight;
};

let trafficLight1 = new (TrafficLight())('North Ave and Peachtree');
console.log(trafficLight1.toString());
trafficLight1.goYellow();
console.log(trafficLight1.toString());
// the next line will not affect the behavior of the object due to
// the protection of the closure.
trafficLight1.state = 'purple';
console.log(trafficLight1.toString());
