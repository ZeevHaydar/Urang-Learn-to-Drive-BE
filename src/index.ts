import express, { Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import { json } from 'express';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

app.get('/dashboard', (req: Request, res: Response) => {
  
});
