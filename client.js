
const soap = require('soap');
const url = 'http://localhost:8000/wsdl?wsdl';

// Crearea clientului
soap.createClient(url, function (err, client) {
  if (err){
    throw err;
  }
  /* 
  * Parametrii serviciului
  */
  let args = {
    message: "Heelo-I-Am-A-Frontend-Developer",
    splitter: "-"
  };
  // Apelarea serviciului
  client.MessageSplitter(args, function (err, res) {
    if (err)
      throw err;
      // Afisarea rezultatului
    console.log(res); 
  });
});