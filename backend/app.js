require('dotenv').config();
const express = require('express');
const axios = require('axios');
const rateLimit = require('express-rate-limit');
const PORT = process.env.PORT || 5000;
const app = express(); 


const API_URL = 'https://v6.exchangerate-api.com/v6';
const API_KEY = process.env.EXCHANGE_RATE_API_KEY;
const apiLimiter = rateLimit({
    windowMs: 20 * 60 * 1000, //unlimited requests per/30minutes
    max: 100 //limit each ip to 100 requests per/window
}) 


//Middlewares
app.use(express.json()); //to parse incoming json data
app.use(apiLimiter);



//conversion router 
app.post("/api/convert", async(req, res) => {
    try {
        //get user data
    const { from, to, amount } = req.body;
    //construct the pi
    const url = `${API_URL}/${API_KEY }/pair/${from}/${to}/${amount}`;
    const response = await axios.get(url);
    // console.log(response);
    if(response.data && response.data.result === "success"){
        res.json({
            base: from, 
            target: to,
            conversionRate:response.data.conversion_rate,
            convertedAmount:response.data.conversion_result
        });
    }else{
        res.json({message:"error converting currency", details: response.data});
    }
    
    } catch (error) {
        res.json({message:"error converting currency", details: error.message});
    }
});

//spin the server
app.listen(PORT, console.log(`server is running on PORT ${PORT}`));