
var Horseman = require('node-horseman');

var horseman = new Horseman();

horseman
  .open('https://www.southwest.com')
  .type('input[name="originAirport']', 'SFO')


//phatom js testing

//horeman allows you to run phantom js headless

//if you do it headless its way faster


