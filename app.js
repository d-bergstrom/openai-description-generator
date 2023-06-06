const express = require('express');

//Created functions to query OpenAI
const { generateDescription, generateImage } = require('./controllers/openaiController');

//Setup express app
const app = express();
app.listen(4000, () => console.log('Listening for requests on port 4000'));

//Middleware to extract JSON data from post requests
//When sending post requests from front end we're sending JSON data in the body of that request
//This allows us to easily extract that body data to easily pass it to the different route handlers
app.use(express.json());

//Middleware that tells express that the public folder will be accessable to the browser
app.use(express.static('public'));

//Routes
//Callback functions accept two arguments (req, res)
app.post('/openai/description', generateDescription);
app.post('/openai/image', generateImage);









/* USER INPUT TESTING
//Get user input through terminal
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, //Input will be from keyboard when typing into the terminal
    output: process.stdout //Output will be shown to the terminal
});

//The question method is part of the readline module provided by the readline. Interface class.
//It has two arguments: A question to the user and a callback function that will be called and passed the user's input as an argument.
rl.question('Enter YouTube Video Title: ', generateDescription);
rl.question('Describe the image: ', generateImage);
*/