const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// cURL command
const curlCommand = 'curl -X POST -H "Content-Type: application/json" -d \'{"texto":"string"}\' https://orca-app-pa7lc.ondigitalocean.app/palindromo';

// Convert cURL to Node.js request using axios
const options = {
    url: 'https://orca-app-pa7lc.ondigitalocean.app/palindromo',
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
    },
    data: {
        texto: 'string',
    },
};

// Convert cURL to Node.js request using axios
axios.post(url, null, { headers })
    .then(response => {

        const dados = response.data; 
  
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
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

    app.listen(port, () => console.log("Aplicação listada na porta: " + port));