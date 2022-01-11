var express = require('express');
var router = express.Router();

var User = require('../controllers/user')

router.get('/', function(req,res) {
  User.listar()
    .then(dados => res.status(200).jsonp({users: dados}))
    .catch(err => res.status(500).jsonp({err: err}))
})

router.post('/', function(req,res) {
  User.inserir(req.body)
    .then(dados => res.status(201).jsonp({user: dados}))
    .catch(err => res.status(500).jsonp({err: err}))
})
  
router.post('/login', function(req, res){
  User.consultar(req.body.username)
    .then(dados => {
      console.log(req.body.username)
      console.log(req.body.password)
      console.log(dados)
      if(!dados) res.status(403).jsonp(false)
      else if(req.body.password != dados.password) res.status(403).jsonp(false)
      else return res.status(201).jsonp(true)
    })
    .catch(err => res.status(500).jsonp({err: err}))
})

module.exports = router;
