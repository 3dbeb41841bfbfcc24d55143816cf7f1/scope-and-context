// An IIFE that returns a Constructor Function
var TrafficLight = (function() {
  //  private stuff goes here, shared by all instances
  var RED = 'red', YELLOW = 'yellow', GREEN = 'green';

  return function(theName) {
    // per-instance private vars go here
    var name = theName;
    var state = RED;

    this.getName  = function() { return name;    };
    this.getState = function() { return state;   };
    this.goGreen  = function() { state = GREEN;  };
    this.goYellow = function() { state = YELLOW; };
    this.goRed    = function() { state = RED;    };
  };
})();

TrafficLight.prototype.toString = function() {
  return this.getName() + ' is ' + this.getState();
};

var trafficLight = new TrafficLight("Peachtree and North Ave");

console.log(trafficLight.toString());
trafficLight.goGreen();
console.log(trafficLight.toString());
