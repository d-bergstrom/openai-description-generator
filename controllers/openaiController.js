/* This file stores functions for querying the OpenAI API */


const openai = require('../config/openaiConfig');

//Function that will pass user input to ChatGPT to generate a YouTube video description
const generateDescription = async (title) => {
    const description = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: `Come up with a description for a YouTube video called ${title}`}],
        max_tokens: 100,
    });

    console.log(description.data.choices[0].message);
}

//Function that will pass user input to ChatGPT to generate an image for a Youtube video description
const generateImage = async (desc) => {
    const image = await openai.createImage({
        prompt: desc,
        n: 1,
        size: '512x512',
    });

    console.log(image.data.data[0].url);
}

module.exports = { generateDescription, generateImage };