//1. call mysql package
const mysql = require('mysql');
//2. call express package
const express = require('express');
//3. call bodyparser package
const bodyparser = require('body-parser');
//4. Instance a new express application, app va a permitir ejecutar el crud y otros
var app = express();
//5. Enable json request/en este momento express es app, asi que le pido permiso
//todo lo que genere el crud a nivel de lectura lo haga usando el metodo de conversion del formato json
app.use(bodyparser.json);
//6. Create mysql database conection
var conectionDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'market'
});
//7. Validate mysql connection

//8. RUN server
app.listen(3000);