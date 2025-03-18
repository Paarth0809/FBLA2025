const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const fs = require('fs');
const session = require('express-session');
const path = require('path');
// import OpenAI from 'openai';
// import { config } from 'dotenv';
const OpenAI = require('openai')
const { config } = require('dotenv')
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3000;

// read the Open AI key from the .env file 
config();

// create openai client
const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up session management
app.use(session({
  secret: 'ILoveFBLAAndCoding2025',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure to true in production
}));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main HTML file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// open ai api endpoint

const filePath = 'my_data.txt';

const fileContent = fs.readFileSync(filePath, 'utf8');

app.post('/api/ask', async (req, res) => {
  const { question } = req.body;
  console.log("asked question:", question);


  try {
    const gptResponse = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: fileContent },
        { role: 'user', content: question },
      ],
      max_tokens: 800,
      temperature: 0.6
    });

    res.json(gptResponse);
  } catch (error) {
    console.error('Error with OpenAI API request:', error);
    res.status(500).json({ error: 'Error with OpenAI API request' });
  }
});