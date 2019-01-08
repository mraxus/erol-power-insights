const http = require('http');

const SERVER_URL = 'http://10.0.0.16:5500';

module.exports = () => {
  return new Promise((resolve, reject) => {
    http.get(`${SERVER_URL}/homey-calling`, (resp) => {
      let data = '';
      resp.on('data', (chunk) => { data += chunk; });
      resp.on('end', () => { resolve(JSON.parse(data)); });
    }).on("error", reject);
  });
}
