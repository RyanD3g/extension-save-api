import express from 'express';
import dotenv from 'dotenv';
import { validateVariables } from './src/validators/dotenv-validator';
import { route } from './routes';

dotenv.config();
validateVariables();

const app = express();

app.use(route);

export { app };
