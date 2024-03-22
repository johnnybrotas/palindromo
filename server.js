const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/palindromo', (req, res) => {
  try {
    const { texto } = req.body;

    if (!texto) {
      return res.status(400).json({ error: "Favor fornecer uma string no corpo da requisição." });
    }

    const str = texto.toUpperCase().replace(/\s+/g, "");
    const isPalindromo = (str === str.split("").reverse().join(""));

    const ocorrencias_caracteres = {};
    for (let char of str) {
      ocorrencias_caracteres[char] = (ocorrencias_caracteres[char] || 0) + 1;
    }

    const resultado = {
      palindromo: isPalindromo,
      ocorrencias_caracteres
    };

    res.status(200).json(resultado);
  } catch (error) {
    console.error("Erro durante o processamento da solicitação:", error);
    res.status(500).json({ error: "Ocorreu um erro durante o processamento da solicitação." });
  }
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});