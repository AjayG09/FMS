const path = require('path');
const { delay, file, success } = require('connect-api-mocker/helpers');

module.exports = [delay(100), success(), file(path.join(__dirname, './GET.json'))];
