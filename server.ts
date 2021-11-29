import express from "express";
import connect from "./config/database";

require('dotenv').config();

//System Variables
const PORT: number = parseInt(process.env.PORT || '3000');
const HOST: string = process.env.HOST || 'localhost';

const app = express();

//Middlewares for parsing incoming requests
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(PORT, HOST, () => {
    //MongoDb Connection
    connect();
    console.log(`Application is Serving at http://${process.env.HOST}:${process.env.PORT}`);
});