const request = require('request');
const done = require('./bash');

function curl(url, endAction) {
  request(url, function (error, response, body) {
    if (error) {
      endAction('Something went wrong!');
    }
    endAction(body);
  });
}

module.exports = curl;
