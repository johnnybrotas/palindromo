const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/palindromo", express.static(path.join(__dirname, "public")));

app.post('/data', (req, res) => {

  const dados = req.body; 
  
  var str = dados.texto.toUpperCase().replace(/\s+/g, ""); // Remove espaços e deixa tudo em maiúsculo
  var isPalindromo = (str === str.split("").reverse().join("")); // Verifica se a string é um palíndromo

  if (str !== "") { 

    const resultado = {
      "palindromo": isPalindromo,
      "ocorrencias_caracteres": {}
    };

    for (let char of str) { // Conta as ocorrências de cada caractere
      resultado.ocorrencias_caracteres[char] = (resultado.ocorrencias_caracteres[char] || 0) + 1;
    }

    res.status(200).json(resultado); 

  } else {
    res.status(400).send("Favor fornecer uma string!");
  }
});

// Tratamento de erros
app.use(function (error, res) {
  console.error(error.stack);
  res.status(400).send(error.message);
});

app.listen(port, () => console.log("Aplicação listada na porta: " + port));