const { delay, file, success } = require('connect-api-mocker/helpers');
const path = require('path');

module.exports = [delay(1000), success(), file(path.join(__dirname, './GET.json'))];
