import express, {Application} from 'express';


const app: Application = express(); 
const port = process.env.PORT || 8000;

export {app, port};