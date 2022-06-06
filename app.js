require('dotenv').config()
const express = require('express');
const { default: mongoose } = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.zwrqo.mongodb.net/?retryWrites=true&w=majority")

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, resp,next) => {  
console.log("Peticion recibida")
process.env.PASSWORD
console.log("Direccion:",__dirname)
resp.status(200).sendFile("index.html",{root:__dirname})
next()
})

const PORT = process.env.PORT || 4000


app.listen(PORT,()=>{
    console.log('Servidor escuchando el puerto ${PORT}')
})



