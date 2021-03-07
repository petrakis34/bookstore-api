const Book = require('../models/book');

async function list(ctx, next) {
  const books = await Book.find({});

  ctx.status = 200;
  ctx.body = books;
}

async function show(ctx, next) {
  const book = await Book.findById(ctx.params.bookId);

  ctx.status = 200;
  ctx.body = book;
}

async function create(ctx, next) {
  const bookParams = ctx.request.body;
  const book = new Book(bookParams);

  const response = await book.save();
  ctx.status = 201;
  ctx.body = response;
}

async function search(ctx, next) {
  let books = [];
  if (ctx.query.filters) {
    const filters = ctx.query.filters.split(',').map(f => {
      return {
        [f]: { $regex: new RegExp(`.*${ctx.params.term}.*`, 'i') }
      };
    });
    books = await Book.find({ $or: filters });
  } else {
    books = await Book.find({
      $text : { $search: ctx.params.term }
    });
  }

  ctx.status = 200;
  ctx.body = books;
}

module.exports = {
  list,
  show,
  create,
  search
};
