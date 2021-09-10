// Our request module will include a function that allows us to send it to a url and pass in some data

// This is https, which is an encrypted connection, so we'll need a function that will encrypt the data

function encrypt(data){
  return "Encrypted data";
}

// The send function will take the data and encrypt it and send it to the url of our server
function send(url, data){
  const encryptedData = encrypt(data);
  console.log(`Sending ${encryptedData} to ${url}`);
}

module.exports = {
  send,
}