const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    description: {
      type: String
    },
    favoriteCount: {
      type: Number
    },
    rating: {
      type: Number
    },
    tags: [{
      type: String
    }],
    year: {
      type: Number
    },
    pages: {
      type: Number
    },
    isbn: {
      type: String
    },
    author: {
      type: String
    },
    published: {
      type: String
    },
    publisher: {
      type: String
    },
    website: {
      type: String
    },
    image: {
      type: String
    }
  }
);

BookSchema.index({
  title: 'text',
  subtitle: 'text',
  description: 'text',
  isbn: 'text',
  author: 'text',
  publisher: 'text'
});

//Exports the BookSchema for use elsewhere.
module.exports = mongoose.model('book', BookSchema);
