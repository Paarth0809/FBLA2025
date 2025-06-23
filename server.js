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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const usersFile = 'users.json';

const getUsers = () => {
  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify([]));
  }
  const data = fs.readFileSync(usersFile);
  return JSON.parse(data);
};

const saveUsers = (users) => {
  fs.writeFileSync(usersFile, JSON.stringify(users));
};
// sign up endpoint
app.post('/signup', async (req, res) => {
  const { signupEmail, password, fullName, age, phoneNumber } = req.body;
  const users = getUsers();
  const userExists = users.find(user => user.signupEmail === signupEmail);

  if (userExists) {
    return res.status(400).send('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ signupEmail, password: hashedPassword, fullName, age, phoneNumber });
  saveUsers(users);

  res.status(201).send('User created');
});

// login endpoint
app.post('/login', async function (req, res) {
  const { username, password } = req.body;
  const users = getUsers();
  const user = users.find(user => user.signupEmail.toLowerCase() === username.toLowerCase());

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).send('Invalid email or password');
  }

  // Save user in the Session
  req.session.user = { username: user.signupEmail };
  res.status(200).send('Login successful');
});

// save progress endpoint
// This endpoint will save the game state for a user
app.post('/save-progress', (req, res) => {
    console.log("Saving progress for user");
    const { gameState } = req.body;
    let users = JSON.parse(fs.readFileSync('users.json', 'utf8'));
    console.log("Saving progress for user:", req.session.user, "with progress:", gameState);
    // log the users array to see its contents
    console.log("Current users:", users);
    const user = users.find(u => u.signupEmail.toLowerCase() == req.session.user.username.toLowerCase());
    if (user) {
        user.gameState = gameState; // Save the entire gameState
        fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
        res.json({ success: true });
    } else {
        res.status(404).json({ success: false, message: "User not found" });
    }
    
});




// Route to check session status
app.get('/session-status', (req, res) => {
  console.log("session status:", req.session.user);
  if (req.session.user) {
    res.json({ isLoggedIn: true });
  } else {
    res.json({ isLoggedIn: false });
  }
});

// Logout route
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Logout failed');
    }
    res.redirect('/');
  });
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


