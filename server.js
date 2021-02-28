const Koa = require('koa');
const Router = require('@koa/router');
const mongoose = require('mongoose');
const bodyParser = require('koa-body-parser');
const logger = require('koa-logger');
const cors = require('@koa/cors');
const {
  list: listBooks,
  show: showBook,
  create: createBook,
  search: searchBooks
} = require('./controllers/books');

const app = new Koa();
const router = new Router();
mongoose.connect('mongodb://localhost:27017/bookstore');
app.listen(3030);

router.get('/books', listBooks);
router.post('/books', createBook);
router.get('/books/:bookId', showBook);
router.get('/books/search/:term', searchBooks);

app.use(logger());
app.use(bodyParser());
app.use(cors());
app.use(router.routes());