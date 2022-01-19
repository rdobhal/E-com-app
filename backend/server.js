import express from 'express';
import bodyParser from 'body-parser';
import productRoute from './routes/productRoute.js';


const app = express();
app.use(bodyParser.json());

app.use('/api/products', productRoute);

app.listen(8000, () => { console.log("Server started at http://localhost:8000") });