//Crear aplicación de express
const express = require('express');
const res = require('express/lib/response');

const path = require('path');

//Ejecutar aplicación de express
const app = express()

//Definicion del puerto, donde se manipulan las variables de ambiente
const port = process.env.PORT || 3000;

//Solicitud al endpoint "/home"
app.get('/home',(req,res)=>{

    //Envia index.html a la solicitud
    res.sendFile(path.join(__dirname, 'index.html'));
})

//Definir el parametro donde la aplicacion escucha
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})