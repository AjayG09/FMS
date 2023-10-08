const path = require('path');
const { delay, success, file} = require('connect-api-mocker/helpers');

// 100ms simulates server delay
module.exports = [delay(100), success(), file(path.join(__dirname, './PATCH.json'))];