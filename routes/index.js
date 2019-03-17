var express = require('express');
var router = express.Router();

const data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: 'CANADA', 
    message: "Canada is a North American country stretching from the U.S. in the south to the Arctic Circle in the north. Major cities include massive Toronto, west coast film centre Vancouver, French-speaking Montreal and Quebec City, and capital city Ottawa. Canada's vast swaths of wilderness include lake-filled Banff National Park in the Rocky Mountains. It's also home to Niagara Falls, a famous group of massive waterfalls.",
    CNTower: 'The CN Tower is a 553.3 m-high concrete communications and observation tower located in Downtown Toronto, Ontario, Canada. Built on the former Railway Lands, it was completed in 1976. Its name "CN" originally referred to Canadian National, the railway company that built the tower.',
    vancouver: 'Vancouver, a bustling west coast seaport in British Columbia, is among Canada’s densest, most ethnically diverse cities. A popular filming location, it’s surrounded by mountains, and also has thriving art, theatre and music scenes. Vancouver Art Gallery is known for its works by regional artists, while the Museum of Anthropology houses preeminent First Nations collections.'
   });
});


module.exports = router;
