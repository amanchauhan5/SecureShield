require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const policyRoutes = require('./routes/policies');
const userRoutes = require('./routes/users');

const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

app.use('/api/policies', policyRoutes);
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI)  // Async ( returns a promise)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB & listening on', process.env.PORT);
    })
  })
  .catch((err) => {
    console.log(err);
  });

