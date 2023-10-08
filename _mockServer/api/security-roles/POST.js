const { delay, file, success } = require('connect-api-mocker/helpers');
const path = require('path');

// 100ms simulates server delay
module.exports = [delay(100), success(), file(path.join(__dirname, './POST.json'))];
