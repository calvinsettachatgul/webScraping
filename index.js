var rp = require('request-promise');
var cheerio = require('cheerio');

//cherio is a jquery like module to interact with html



var createCraigURL = function(car){
  return 'http://sfbay.craigslist.org/search/cta?is_paid=all&search_distance_type=mi&query=' + car;
}

var carURL = createCraigURL('mercedes');



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

    if(priceOfCar.legnth === 0){

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