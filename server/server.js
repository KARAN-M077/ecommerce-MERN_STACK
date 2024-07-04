
const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());

let db;

MongoClient.connect('mongodb+srv://karanm17ab:karanm2004@trainingproject.77ipet4.mongodb.net/Ecommerce?retryWrites=true&w=majority')
    .then(client => {
        db = client.db();
        app.listen(port, () => {
            console.log(`App listening on  port http://localhost:${port}`);
        });
    })
    .catch(error => {
        console.log("Error connecting to MongoDB:", error);
    });
    app.post('/add-data-all-product',(req,res)=>
{
    db.collection('all_product').insertMany(req.body)
    .then(()=>{res.status(200).send})
    
})
    
app.get('/allproducts', (req, res) => {
    console.log("Finding all products...");
    db.collection('all_product').find().toArray()
        .then(entries => {
            console.log("Entries found:", entries);
            if (entries.length > 0) {
                res.status(200).json(entries); // Send JSON response
            } else {
                res.status(404).json({ error: 'No products found' });
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.get('/newcollection',(req,res)=>
{
    const entries=[]
    db.collection('new-collection').find().toArray()
    .then(entries => {
                    console.log("Entries found:", entries);
                    if (entries.length > 0) {
                        res.status(200).json(entries); // Send JSON response
                    } else {
                        res.status(404).json({ error: 'No products found' });
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    res.status(500).json({ error: 'Internal Server Error' });
                });
        });

        app.get('/relatedproduct',(req,res)=>
        {
            const entries=[]
            db.collection('related-product').find().toArray()
            .then(entries => {
                            console.log("Entries found:", entries);
                            if (entries.length > 0) {
                                res.status(200).json(entries); // Send JSON response
                            } else {
                                res.status(404).json({ error: 'No products found' });
                            }
                        })
                        .catch(error => {
                            console.error('Error fetching data:', error);
                            res.status(500).json({ error: 'Internal Server Error' });
                        });
                });


                app.post('/addtocart', async (req, res) => {
                    try {
                      console.log('Request body:', req.body); // Log the request body
                  
                      const { _id, name, image } = req.body;
                      const collection = db.collection('cart');
                  
                      if (!_id) {
                        return res.status(400).send({ message: 'Product ID is required' });
                      }
                  
                      const productId = new ObjectId(_id);
                      const cartItem = await collection.findOne({ productId });
                  
                      if (cartItem) {
                        await collection.updateOne(
                          { productId },
                          { $inc: { quantity: 1 } }
                        );
                        res.status(200).send({ message: 'Quantity updated in cart' });
                      } else {
                        const product = {
                          productId,
                          name,
                          image,
                          quantity: 1
                        };
                        const result = await collection.insertOne(product);
                        res.status(200).send({ message: 'Product added to cart', result });
                      }
                    } catch (error) {
                      console.error('Error adding product to cart:', error);
                      res.status(500).send({ message: 'Error adding product to cart', error });
                    }
                  });
                  app.get('/cartitems', (req, res) => {
                    console.log("Finding all products in the cart...");
                    db.collection('cart').find().toArray()
                        .then(entries => {
                            console.log("Entries found in the cart:", entries);
                            if (entries.length > 0) {
                                res.status(200).json(entries); // Send JSON response
                            } else {
                                res.status(404).json({ error: 'No products found' });
                            }
                        })
                        .catch(error => {
                            console.error('Error fetching data:', error);
                            res.status(500).json({ error: 'Internal Server Error' });
                        });
                });
                app.post('/updatecart', async (req, res) => {
                  try {
                    const { productId, quantity } = req.body;
                    const collection = db.collection('cart');
                
                    if (!productId) {
                      return res.status(400).send({ message: 'Product ID is required' });
                    }
                
                    if (quantity === 0) {
                      // Delete the product if the quantity is 0
                      const result = await collection.deleteOne({ _id: new ObjectId(productId) });
                      if (result.deletedCount > 0) {
                        res.status(200).send({ message: 'Product deleted from cart' });
                      } else {
                        res.status(404).send({ message: 'Product not found in cart' });
                      }
                    } else {
                      // Update the quantity if it's greater than 0
                      const result = await collection.updateOne(
                        { _id: new ObjectId(productId) },
                        { $set: { quantity } }
                      );
                      
                      if (result.matchedCount > 0) {
                        res.status(200).send({ message: 'Quantity updated in cart' });
                      } else {
                        res.status(404).send({ message: 'Product not found in cart' });
                      }
                    }
                  } catch (error) {
                    console.error('Error updating quantity in cart:', error);
                    res.status(500).send({ message: 'Error updating quantity in cart', error });
                  }
                });
                