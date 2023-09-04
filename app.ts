import express from 'express';
import dotenv from 'dotenv';
import { validateVariables } from './src/validators/dotenv-validator';

dotenv.config();
validateVariables();

const app = express();

export { app };
