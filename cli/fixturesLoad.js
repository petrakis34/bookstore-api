#!/usr/bin/env node

const mongoose = require('mongoose');
const Book = require('../models/book');
const {books} = require('../models/books.json');
mongoose.connect('mongodb+srv://adminuser:bookstore2021@bookstore-cluster.qtjzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

Book.insertMany(books).
  then(() => {
    console.log("books loaded");
  }).
  catch(console.error).
  finally(mongoose.disconnect);
