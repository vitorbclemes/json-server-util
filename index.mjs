import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('db.json'); // Carrega o arquivo db.json
const middlewares = jsonServer.defaults();

// Usando middlewares padrão
server.use(middlewares);

// Rota para retornar erro (simulando erro 500)
server.post('/error', (req, res) => {
  res.status(500).json({ error: 'Simulação de erro no servidor.' });
});

// Usando o router do json-server para as rotas padrão (incluindo /webhook)
server.use(router);

// Iniciando o servidor
server.listen(3000, () => {
  console.log('JSON Server rodando em http://localhost:3000');
});