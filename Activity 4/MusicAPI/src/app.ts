//Rebecca Johnson - CST 391 - Activity 1
//importing the app frame work 'express'  for Node.js
import express, { Request, Response } from 'express';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';

//the albums and artists routers are imported and given local names 
//'albumsRouter' and 'artistsRouter'
import albumsRouter from './albums/albums.routes';
import artistsRouter from './artists/artists.routes';
import dotenv from "dotenv";

dotenv.config();

const app = express(); //instance of express app
const port = process.env.PORT; //using port

if (process.env.NODE_ENV == 'development') { 
    // Add logger middleware 
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode')
}

//enables all CORS requests
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies 
app.use(express.urlencoded({ extended: true }));

//adding set of security middleware
app.use(helmet());

console.log(process.env.MY_SL_DB_HOST);

//Application routes
//root route
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the Music API</h1>')
});

//routes are passed via an array to the express application
//Turns in Express application by registering routers with app.use
app.use('/', [albumsRouter, artistsRouter]);

//server is started and after the get response is made to '/' it sends this response
app.listen(port, () => { 
    console.log(`Example app listening at http://localhost:${port}`)
});