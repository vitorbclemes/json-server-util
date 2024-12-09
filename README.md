## Documentação
O servidor roda na porta 3000.
Sempre que realizar alguma implementação, adicione aqui a função do enpoint:

- ### /webhook:
Recebe qualquer objeto enviado via requisição POST, sempre retorna sucesso. Guarda o objeto enviado no arquivo db.json.

- ### /error:
Sempre retorna um erro 500
