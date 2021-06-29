import express from 'express';
import cors from 'cors';
import productsInfo from './data/product-info.json';
import productsRating from './data/product-ratings.json';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
     res.json('200');
});

app.get('/product-info/products', (req, res) => {
    res.json(productsInfo);
});

app.get('/product-info/ratings', (req, res) => {
    res.json(productsRating);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});