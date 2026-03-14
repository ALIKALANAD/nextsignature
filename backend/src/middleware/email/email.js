const crypto = require('crypto');
const nodemailer = require('./config/mail');
const Client = require('../models/Client');
const Template  = require('../models/emailTemplate');

const requestPasswordReset = async (req, res) => {
  
};

module.exports = {
  requestPasswordReset,
};
