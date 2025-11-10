const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const subscribersFilePath = path.join(__dirname, 'subscribers.json');

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  fs.readFile(subscribersFilePath, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read subscribers file' });
    }

    const subscribers = data ? JSON.parse(data) : [];
    subscribers.push(email);

    fs.writeFile(subscribersFilePath, JSON.stringify(subscribers, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to save subscriber' });
      }
      res.status(200).json({ message: 'Successfully subscribed' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
