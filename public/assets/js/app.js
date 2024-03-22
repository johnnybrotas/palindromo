function enviar() {
  
  var texto = document.getElementById("texto").value;

  const xhr = new XMLHttpRequest();
 
  // create a JSON object
  const json = {texto: texto};

  // open request
  xhr.open("POST", "/data");

  // set `Content-Type` header
  xhr.setRequestHeader("Content-Type", "application/json");

  // send request with JSON payload
  xhr.send(JSON.stringify(json));
}