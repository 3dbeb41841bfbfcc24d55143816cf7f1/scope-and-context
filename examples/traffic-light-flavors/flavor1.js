// Object Literal
var trafficLight = {
  name     : 'Peachtree and North Ave',
  state    : 'red',
  getName  : function() { return this.name;      },
  getState : function() { return this.state;     },
  goGreen  : function() { this.state = 'green';  },
  goYellow : function() { this.state = 'yellow'; },
  goRed    : function() { this.state = 'red';    },
  toString : function() { return this.getName() + ' is ' + this.getState(); }
};

console.log(trafficLight.toString());
trafficLight.goGreen();
console.log(trafficLight.toString());
