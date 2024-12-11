export const fetchSpotifyAuthorizationUrl = () => {
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirectUrl = process.env.REACT_APP_SPOTIFY_REDIRECT_URL;
    const apiUrl = process.env.REACT_APP_SPOTIFY_API_URL;
    const scope = ["user-top-read"];

    return `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
        " "
    )}&response_type=token&show_dialog=true`;
};
