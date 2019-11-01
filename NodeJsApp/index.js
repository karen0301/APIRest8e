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
//variable de coneccion a la db le digo .connect y que retorne un error
conectionDB.connect((err)=>{
    if (!err)
        console.log('::: Succesfull connection to data Base :::');
    else
        console.log('DB connection failed \n Error: '+ JSON.stringify(err,undefined,2));
});

//8. RUN server
app.listen(3000,()=>console.log('Server is running at port 3000'));
//9.
app.get('/list_users',(req,res)=>{
    conectionDB.query('SELECT * FROM users',(err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.send(rows);
            }else{
                console.log(err);
            }
    });
});
//10. Get an user/ obtener un usuario
app.get('/list_users/:id',(req,res)=>{
    conectionDB.query('SELECT * FROM users WHERE id = ?', [req.params.id],(err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});
//11. Delete an user/ Borrar un usuario
app.delete('/list_users/:id',(req,res)=>{
    conectionDB.query('DELETE * FROM users WHERE id = ?', [req.params.id],(err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});
//12.Guardar será un post
