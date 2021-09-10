// create a function that makes a request from a server to send it some data

// function will take a url for the destination that we're making requests from, as well as some data to send to that destination

// It's going to return the response

// We'll break out the details of the request and response into separate files
const request = require('./request');
const response = require('./response');

function makeRequest(url, data){
  request.send(url, data);
  return response.read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);