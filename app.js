//Get user input through terminal
const readline = require('readline');

const { generateDescription, generateImage } = require('./controllers/openaiController');

const rl = readline.createInterface({
    input: process.stdin, //Input will be from keyboard when typing into the terminal
    output: process.stdout //Output will be shown to the terminal
});

//The question method is part of the readline module provided by the readline. Interface class.
//It has two arguments: A question to the user and a callback function that will be called and passed the user's input as an argument.
// rl.question('Enter YouTube Video Title: ', generateDescription);
rl.question('Describe the image: ', generateImage);