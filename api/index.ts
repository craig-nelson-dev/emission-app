import express from 'express';
import bodyParser from 'body-parser';
import { data } from './data.json'
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, res) => {
  res.send('ok');
});

app.get('/blogs', async (req, res) => {
  res.json({
    blogs: data,
  });
});

// app.get('/blog/:id', async (req, res) => {
//   const id = req.params.id;
//   const blog = blogs.find((item: Item) => item.id === Number(id));

//   if (!blog) throw new Error('No blog post requested');

//   res.json({
//     blog,
//   });
// });

// app.post('/blog', async (req, res) => {
//   if (!req.body) throw new Error('No blog post requested');
//   const { id, title, price, body } = req.body;
//   blogs.push({ id, title, price, body });

//   res.json({
//     success: true,
//   });
// });

app.listen(8000, () => {
  console.log('🚀 Server started 🚀');
});

// more routes to implement here
