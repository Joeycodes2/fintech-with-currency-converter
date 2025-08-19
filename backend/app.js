const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express(); 


//Middlewares
app.use(express.json());




//spin the server
app.listen(PORT, console.log('server is running on PORT ${PORT}'));