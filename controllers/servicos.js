const controller = {
  verUm: (req, res) => res.send(`<h1>Página Serviço ${req.params.id}</h1>`),
  verTodos: (req, res) => res.send("<h1>Página Serviços</h1>"),
  adicionar: (req, res) => res.send("<h1>Adicionar Serviço</h1>"),
  editar: (req, res) => res.send(`<h1>Editar Serviço ${req.params.id}</h1>`),
  excluir: (req, res) => res.send(`<h1>Excluir Serviço ${req.params.id}</h1>`),
};

module.exports = controller;
