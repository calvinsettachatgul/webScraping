var rp = require('request-promise');
var cheerio = require('cheerio');

//cherio is a jquery like module to interact with html



var createCraigURL = function(car){
  return 'http://sfbay.craigslist.org/search/cta?is_paid=all&search_distance_type=mi&query=' + car;
}

var carURL = createCraigURL('jeep');

var options = {
  uri: carURL,
  transform: function(body){
    return cheerio.load(body);
  }
}

rp(options)
.then(function($){

  var cars = $('p.row');

  for (var i = 0; i < cars.length; i++){

    // car title
    console.log("TITLE: ", cheerio(cars[i]).find('a.hdrlnk').text());

    // car price
    var price = cheerio(cars[i]).find('span.l2').find('span.price').text();
    if (price.length !== 0){
      console.log("PRICE: ", price);
    } else {
      console.log('PRICE:  NOT LISTED');
    }

    // car data posted
    console.log("DATE: ", cheerio(cars[i]).find('time').attr('datetime'))

    console.log('\n');

  }



var options = {
    uri: carURL,
    transform: function (body) {
        return cheerio.load(body);
    }
};



rp(options)
.then(function($){
  //get seomthign out of the $

  var cars = $('p.row');

  for(var i =0 ; i < cars.length; i++){
    var titleOfThisCar = cheerio(cars[i]).find('a.hdrlnk').text();

    console.log("Title: " + titleOfThisCar);

    // var priceOfCar = cheerio(cars[i]).find('span.12').find('span.price').text();
    var priceOfCar = cheerio(cars[i]).find('span.12').find('span.price').text();
    console.log(priceOfCar);

    if(priceOfCar.length === 0){

      console.log("Price: not supplied");
    }else{
      console.log("Price: " + priceOfCar);
    }

    console.log('\n');
  }



  //find the titles  use find
  //get the descendants
  // filtering any level down into descendants
  // var titleOfOneCar = cheerio(cars[0]).find('a.hdrlnk').text();

  // console.log(titleOfOneCar);
})

// now go back to selecting those elements again

var options = {
    uri: carURL,
    transform: function (body) {
        // console.log(body);
        return cheerio.load(body);
    }
};


rp(options)
.then(function($){

  // array of all the cars
  var cars = $('p.row');

  for (var i = 0; i < cars.length; i++){
    var titleOfThisCar = cheerio(cars[i]).find('a.hdrlnk').text();
    console.log("TITLE: ", titleOfThisCar);

    var priceOfCar = cheerio(cars[i]).find('span.l2').find('span.price').text();

    if (priceOfCar.length === 0){
      console.log("PRICE: Not supplied\n");
    } else {
      console.log("PRICE: ", priceOfCar + '\n');
    }


  }

  // var titleOfOneCar = cheerio(cars[0]).find('a.hdrlnk').text();

  // console.log(titleOfOneCar);
})

















>>>>>>> upstream/liveCode
