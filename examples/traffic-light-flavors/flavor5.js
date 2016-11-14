// A Constructor Function implemented with an IIFE
function TrafficLight(theName) {
  var that = this;
  (function() {
    var name = theName;
    var state = 'red';
    that.getName  = function() { return name;      };
    that.getState = function() { return state;     };
    that.goGreen  = function() { state = 'green';  };
    that.goYellow = function() { state = 'yellow'; };
    that.goRed    = function() { state = 'red';    };
    that.toString = function() { return this.getName() + ' is ' + this.getState(); };
  }());
}

var trafficLight = new TrafficLight('Peachtree and North Ave');

console.log(trafficLight.toString());
trafficLight.goGreen();
console.log(trafficLight.toString());
