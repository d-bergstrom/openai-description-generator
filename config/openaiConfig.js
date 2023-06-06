/* This file sets up the connection to the OpenAI API. */

const { Configuration, OpenAIApi } = require('openai');

//Use the dotenv config method to make API Key available on the 'process' object.
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = openai;