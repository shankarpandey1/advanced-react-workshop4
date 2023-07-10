const express = require('express');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());

const port = 3100;

// Sample list of products
let products = [
    {id : 1, 
    title : "Twist Umbrella",
    brand : "Popular",
    type: "Art",
    detail: "Listed"
    },
    {id : 2, 
    title : "Love Bird",
    brand : "Nomadic",
    type: "Art",
    detail: "Published" 
    },
    {id : 3, 
    title : "Statue Mont-Royal",
    brand : "Stylish",
    type: "Art",
    detail: "Conceptualized"}
    ];
    
    
app.get('/products', (req, res) => {
  res.json(products);
});


app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  for (let p of products) {
    if (p.id == id) {
      res.json(p);
      return;
    }
  }
  res.status(404).send({message: 'Product Not found'});
  });


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
