const express = require('express'),
  router = express.Router()

router.get('/sobre', (req, res) => res.send('<h1>Página Sobre</h1>'))
router.get('/contato', (req, res) => res.send('<h1>Página Contato</h1>'))
router.get('/', (req, res) => res.send('<h1>Página Inicial</h1>'))

module.exports = router
