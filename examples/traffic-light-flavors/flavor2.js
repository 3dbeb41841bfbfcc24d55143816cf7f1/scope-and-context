// Constructor Function with Prototype Methods
function TrafficLight(name) {
  this.name = name;
  this.state = 'red';
}

TrafficLight.prototype.getName   = function() { return this.name; };
TrafficLight.prototype.getState  = function() { return this.state; };
TrafficLight.prototype.goGreen   = function() { this.state = 'green'; };
TrafficLight.prototype.goYellow  = function() { this.state = 'yellow'; };
TrafficLight.prototype.goRed     = function() { this.state = 'red'; };
TrafficLight.prototype.toString  = function() { return this.getName() + ' is ' + this.getState(); }

var trafficLight = new TrafficLight('Peachtree and North Ave');

console.log(trafficLight.toString());
trafficLight.goGreen();
console.log(trafficLight.toString());
