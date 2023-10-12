const express = require('express');
const app = express();
const port = 3001;

app.get('/generateSpotifyAuthUrl', (req, res) => {
    console.log("Route /generateSpotifyAuthUrl has been accessed.");
  const clientId = "1620b101ae454685837ad774b688cb24";
  const redirectUrl = "http://localhost:3000/Receipt";
  const apiUrl = "https://accounts.spotify.com/authorize";
  const scope = [
    "user-read-private",
    "user-read-email",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
  ];

  const authUrl = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;

  res.send(authUrl);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
