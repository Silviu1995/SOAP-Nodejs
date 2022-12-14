"use strict";
const SOAP = require('soap');
const express = require('express');
const fs = require('fs');

// functia de split-uire utilizata de serviciu
function splitter_function(args) {
    console.log('splitter_function');
    var splitter = args.splitter;
    var splitted_msg = args.message.split(splitter);
    var result = [];
    for(var i=0; i<splitted_msg.length; i++){
      result.push(splitted_msg[i]);
    }
    return {
        result: result
        }
}
// serviciul
const serviceObject = {
  MessageSplitterService: {
        MessageSplitterServiceSoapPort: {
            MessageSplitter: splitter_function
        },
        MessageSplitterServiceSoap12Port: {
            MessageSplitter: splitter_function
        }}
};
// incarcarcarea fisierului WSDL
const xml = fs.readFileSync('service.wsdl', 'utf8');
// create express app
const app = express();

// root handler
app.get('/', function (req, res) {
  res.send('Exemplu Node Soap !');
})

// Launch the server and listen
const port = 8000;
app.listen(port, function () {
  console.log('Listening on port ' + port);
  var wsdl_path = "/wsdl";
  SOAP.listen(app, wsdl_path, serviceObject, xml);
});