/* eslint-disable import/no-extraneous-dependencies */
const { delay, json, success } = require('connect-api-mocker/helpers');


const response = {
    invoicesExpiringToday: 3,
    escaletedInvoices: 28,
    overdueInvoices: 2,
    pendingInvoices: 23,
};

// 2000ms simulates server delay
module.exports = [delay(2000), success(), json(response)];