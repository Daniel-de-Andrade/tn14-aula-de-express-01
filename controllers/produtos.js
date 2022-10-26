const controller = {
  show: (req, res) => res.send(`Página Produto ${req.params.id}`),
  showAll: (req, res) => res.send("Página Produtos"),
  showPromos: (req, res) => res.send("Página Promoções"),
  add: (req, res) => res.send("Adicionar Produto"),
  edit: (req, res) => res.send(`Editar Produto ${req.params.id}`),
  exclude: (req, res) => res.send(`Excluir Produto ${req.params.id}`),
};

module.exports = controller;
