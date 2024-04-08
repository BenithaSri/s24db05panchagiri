var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Gems = require("./models/ExoticGem");
var bodyParser = require("body-parser");

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
console.log(connectionString);
mongoose.connect(connectionString);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var exoticgem = require('./routes/exoticgem');
var grid = require('./routes/grid');
var pick = require('./routes/pick');
var resourceRouter = require('./routes/resource');





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/exoticgem', exoticgem);
app.use('/grid', grid);
app.use('/pick', pick);
app.use('/resource', resourceRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await Gems.deleteMany();
  let instance1 = new
    Gems({
      gem_name: "Emerald", color: 'green',
      rarity_level: 10
    });
  instance1.save().then(doc => {
    console.log("First object saved")
  }
  ).catch(err => {
    console.error(err)
  });

  let instance2 = new
    Gems({
      gem_name: "Ruby", color: 'Pink',
      rarity_level: 15
    });
  instance2.save().then(doc => {
    console.log("Second object saved")
  }
  ).catch(err => {
    console.error(err)
  });

  let instance3 = new
    Gems({
      gem_name: "saphire", color: "orange",
      rarity_level: 20
    });
  instance3.save().then(doc => {
    console.log("Third object saved")
  }
  ).catch(err => {
    console.error(err)
  });

}
let reseed = false;
if (reseed) { recreateDB(); }


//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});

module.exports = app;
