const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
var route = require('./route.js');

var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/invokeCreatecar', async function (request, reply) {
    console.log("INSIDE fabcar app function");
    console.log("checking REquestBOdy" + JSON.stringify(request.body));
    route.invokeCreateCar(request, reply);

})

app.get('/queryCar',async function(request,reply){
    console.log("inside the query funciton");
    console.log("Checking query body",JSON.stringify(request.body));
    route.queryCar(request,reply);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
