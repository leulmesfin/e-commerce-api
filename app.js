require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const Product = require('./models/product.model');
const User= require('./models/user.model');
const app = express();

app.use(express.json());

/* Start the server */
app.listen(3000, () => {
    console.log('listening on port 3000');
});

/* Root */
app.get('/', (req, res) => {
    res.send("Hello World");
});

/* POST request to post a product to the products collection inMongoDB */
app.post('/api/product', async(req, res) => {
   try {
       const product = await Product.create(req.body)
       res.status(200).json(product)
   } catch (error) {
        res.status(500).json({message: error.message})
   }
});

/* POST request to post a User to the users collection in MongoDB */
app.post('/api/user', async(req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
         res.status(500).json({message: error.message})
    }
 });


mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err))