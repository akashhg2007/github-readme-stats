const express = require('express');
const app = express();

app.get('/api', async (req, res) => {
  const { username } = req.query;
  if (!username) return res.status(400).json({ error: 'Username required' });

  try {
    const response = await fetch(https://api.github.com/users/);
    const data = await response.json();

    const stats = {
      name: data.name || username,
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      created_at: data.created_at
    };

    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(Server running on port ));