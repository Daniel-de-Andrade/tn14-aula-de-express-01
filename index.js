const express = require('express'),
  app = express(),
  rotasPrincipais = require('./routes/index'),
  rotasProdutos = require('./routes/produtos'),
  rotasServicos = require('./routes/servicos')

app.use('/produtos', rotasProdutos)
app.use('/servicos', rotasServicos)
app.use('/', rotasPrincipais)

app.listen(3030, () => console.info('Servidor rodando com sucesso!'))
