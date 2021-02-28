#!/usr/bin/env node

const mongoose = require('mongoose');
const Book = require('../models/book');
mongoose.connect('mongodb://localhost:27017/bookstore');

Book.deleteMany().
  then(() => {
    console.log("books deleted!");
  }).
  catch(console.error).
  finally(mongoose.disconnect);
