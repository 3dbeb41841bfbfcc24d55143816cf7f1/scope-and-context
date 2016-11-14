// A Builder Function that returns a Closure
function buildTrafficLight(theName) {
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
}

var trafficLight = buildTrafficLight('Peachtree and North Ave');

console.log(trafficLight.toString());
trafficLight.goGreen();
console.log(trafficLight.toString());
