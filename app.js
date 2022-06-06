require('dotenv').config()
const express = require('express');

const app = express();

app.get('/', (req, resp) => {
console.log("Peticion recibida")
process.env.PASSWORD
resp.send("<h1>Hola Mundo con Auxi!!!</h1>")
})

const PORT = process.env.PORT || 4000


app.listen(PORT,()=>{
    console.log('Servidor escuchando el puerto ${PORT}')
})



