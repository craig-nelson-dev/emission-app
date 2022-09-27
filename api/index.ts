import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { data } from './data.json';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, res) => {
  res.send('ok');
});

app.get('/emissions', async (req, res) => {
  res.json({
    emssions: data,
  });
});

app.listen(8000, () => {
  console.log('🚀 Server started 🚀');
});

// more routes to implement here
