## Documentação
O servidor roda na porta 3000.

Para executar, basta rodar o comando:
`node index.mjs`

### Configuração básica:
Crie na raíz do projeto um arquivo _db.json_ com a seguinte estrutura:

`
{
   "webhook":[]
}
`

Cada propriedade será uma rota dentro do servidor, ou seja, com o exemplo acabamos de criar a rota `http://localhost:3000/webhook`.

O retorno da requisição sempre será 201. 
O conteúdo ficará salvo dentro do _array_.

### Configurações Extras:

É possível criar novos _endpoints_ para testar diferentes retornos. Basta criar novas rotas da maneira comum no arquivo _index.mjs_

- ### /error:
Sempre retorna um erro 500 e um objeto do tipo `{error:"Simulação de erro no servidor"}`
