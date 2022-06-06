const express = require('express');

const app = express();

app.get('/', (req, resp) => {
console.log("Peticion recibida")
resp.send("<h1>Hola Mundo con Nodemon!!!</h1>")
})

app.listen(4000,()=>{
    console.log("Servidor escuchando el puerto 4000")
})



