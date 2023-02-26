var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Whaddup cuz',
    user: 'guythat',
    added: new Date()
  },
  {
    text: 'Not much homie',
    user: 'girlwho',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages : messages });
  next()
});

router.get('/new', function(req, res, next){
  res.render('form')
})

router.post('/new', function(req, res, next){
  messages.push({ text: req.body.messageText, user: req.body.authorName, added: new Date() })
  res.redirect('/')
})

module.exports = router;
