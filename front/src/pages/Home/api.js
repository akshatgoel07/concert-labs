export const fetchSpotifyAuthorizationUrl = () => {
  // my keys expired?
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
  
    return `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  