const Koa = require('koa');
const Router = require('@koa/router');
const mongoose = require('mongoose');
const koaBody = require('koa-body')({multipart: true, uploadDir: './public/images'});
const logger = require('koa-logger');
const cors = require('@koa/cors');
const koaStatic = require('koa-static');
const {
  list: listBooks,
  show: showBook,
  create: createBook,
  search: searchBooks
} = require('./controllers/books');

const app = new Koa();
const router = new Router();
mongoose.connect('mongodb+srv://adminuser:bookstore2021@bookstore-cluster.qtjzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
app.listen(process.env.PORT || 5000);

router.get('/books', listBooks);
router.post('/books', koaBody, createBook);
router.get('/books/:bookId', showBook);
router.get('/books/search/:term', searchBooks);

app.use(logger());
app.use(cors());
app.use(koaStatic('./public'));
app.use(router.routes());