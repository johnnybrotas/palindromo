# Palindromo

Este é um aplicativo Node.js simples que verifica se uma string é um palíndromo e conta o número de ocorrências de cada caractere na string.

## Instalação

1. Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo e instalá-lo a partir do site oficial: [Node.js](https://nodejs.org/)

2. Clone este repositório para o seu sistema local:
   ```bash
   git clone https://github.com/johnnybrotas/palindromo.git
   ```

3. Navegue até o diretório do projeto:
   ```bash
   cd palindromo
   ```

4. Instale as dependências do projeto usando npm:
   ```bash
   npm install
   ```

## Uso

Após instalar as dependências, você pode iniciar o servidor localmente usando o seguinte comando:

```bash
npm start
```

Isso iniciará o servidor na porta padrão 3000. Você pode acessar a API em http://localhost:3000/palindromo.

Para testar a aplicação, você pode usar o comando cURL para enviar solicitações POST com strings para manipulação. Por exemplo:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"texto": "socorram me subi no onibus em marrocos"}' http://localhost:3000/palindromo
```

Isso enviará uma solicitação POST com a string fornecida para a API e retornará a resposta.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou quiser adicionar melhorias à aplicação, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
