import express from 'express';
import data from '../data.js';
const router = express.Router();

 router.get("/", async (req, res) => {
   const searchKeyWord = new RegExp(req.query.search, 'g');
  const products =  data.products.filter(item => item.name.match(searchKeyWord));

  if(req.query.search)
    res.send(products);
  else 
    res.send(data.products);
 });

router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  const product = data.products.find(x => x._id === productId);
  if (product)
    res.send(product);
  else
    res.status(404).send({ msg: "Product Not Found." })
});

// router.get("/", (req, res) => {
//   res.send(data.products);
// });

export default router;