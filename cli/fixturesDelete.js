#!/usr/bin/env node

const mongoose = require('mongoose');
const Book = require('../models/book');
mongoose.connect('mongodb+srv://adminuser:bookstore2021@bookstore-cluster.qtjzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

Book.deleteMany().
  then(() => {
    console.log("books deleted!");
  }).
  catch(console.error).
  finally(mongoose.disconnect);
