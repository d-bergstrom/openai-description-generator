const { Configuration, OpenAIApi } = require('openai');

//Use the dotenv config method to make API key available on the 'process' object.
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = openai;