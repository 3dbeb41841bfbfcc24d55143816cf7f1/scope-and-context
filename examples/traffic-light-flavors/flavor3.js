// IIFE that returns a Closure
var trafficLight = (function(theName) {
  var state = 'red';
  var name  = theName;
  return {
    getName  : function() { return name;      },
    getState : function() { return state;     },
    goGreen  : function() { state = 'green';  },
    goYellow : function() { state = 'yellow'; },
    goRed    : function() { state = 'red';    },
    toString : function() { return this.getName() + ' is ' + this.getState(); }
  };
}('Peachtree and North Ave'));

console.log(trafficLight.toString());
trafficLight.goGreen();
console.log(trafficLight.toString());
