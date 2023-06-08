import React, { useEffect } from 'react';

const TopArt = () => {
    var accessToken = localStorage.getItem("spotifyToken")
  useEffect(() => {

    fetch('https://api.spotify.com/v1/me/top/artists', {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    })
    .then(response => response.json())
    .then(data => {
      // Process the response data containing the user's most played artists
        const artistNames = data.items.map(artist => artist.name);
        console.log(artistNames);
        
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error(error);
    });
  }, []); // Empty dependency array to ensure the code runs only once on component mount

  return (
    <div>
      {/* Rest of your component JSX */}
    </div>
  );
};

export default TopArt;
