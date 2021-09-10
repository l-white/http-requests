// Need a function that reads the response and returns the data we get back. It also needs to be decrypted because the data has been encrypted

function decrypt(data) {
  // use a library that uses TLS, the protocol that our browser and servers use for sending encrypted data over the web
  return 'decrypted data';
}

function read() {
  return decrypt('data');
}

module.exports = {
  read,
}