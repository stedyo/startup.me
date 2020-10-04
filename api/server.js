const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./models/database-pool.js'); // MySql database connection path
const app = express();
const cors = require('cors')
const fileUpload = require('express-fileupload');


app.use(fileUpload());

app.use(cors())

// support parsing of application/json type post data
app.use(bodyParser.json({limit: '15mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '15mb', extended: true}))

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

if(global.SQLpool === undefined){
	global.SQLpool = db.createPool(); //create a global sql pool connection
}

const port = process.env.PORT || 9999;
app.listen(port);

console.log('App is listening on port ' + port);



var routes = require('./routes/appRoutes'); //importing route
routes(app); //register the route

// define here the filesystem url 

