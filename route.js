var update = require('./invoke');
var query = require('./query');
var reqMOd = require('request');

exports.invokeCreateCar = async function(request, reply){
    var reqBody = request.body;

     await update.invokeSDK("createCar",reqBody,reply);
}

exports.queryCar = async function(request, reply){
    var reqBody = request.body;
   await  query.querySDK("queryCar",reqBody,reply);

}