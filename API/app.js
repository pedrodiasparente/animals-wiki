var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var { v4: uuidv4 } = require('uuid');
var session = require('express-session')
var FileStore = require('session-file-store')(session)

var cors = require('cors');

var User = require('./controllers/users')

exports.handler = async (event) => {
  const response = {
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "https://www.example.com",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};


var animalsRouter = require('./routes/animals');
var usersRouter = require('./routes/users');
var classRouter = require('./routes/classifications');


passport.use(new LocalStrategy(
  { usernameField: 'id' }, function (id, password, done) {

    User.getUser(id)
      .then(dados => {
        const user = {
          id:id,
          password:dados.data.results.bindings[0].p.value
        }
        
        //if (!user) { return done(null, false, { message: 'Utilizador Inexistente\n' }) }
        //if (!Bcrypt.compareSync(password, user.password)) { return done(null, false, { message: 'Credenciais Inválidas\n' }) }
        //if (password != user.password) { return done(null, false, { message: 'Credenciais Inválidas\n' }) }
        return done(null, user)
      })
      .catch(erro => done(erro))
  }
))

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((uid, done) => {
  User.getUser(uid)
    .then(dados => {
      
      done(null, dados.data.results.bindings.map( bind => {
        return {
          id:uid,
          password:bind.p.value
        }
      })[0])
    })
    .catch(erro => done(erro, false))
})

var app = express();

app.use(cors());

app.use(session({
  genid: req => {
    return uuidv4()
  },
  secret: 'secret prc',
  store: new FileStore({logFn: function(){}}),
  resave: false,
  saveUninitialized: false
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  if (req.url == "/users/login" || req.url == "/users/register" || req.method == 'GET'){
    next()
  } 
  else if (req.isAuthenticated()) {
    next();
  }
  else{ 
    res.status(401).jsonp({ erro: 'erro na verificação do user' });
  }
})

app.use('/animals', animalsRouter);
app.use('/users', usersRouter);
app.use('/classifications', classRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
