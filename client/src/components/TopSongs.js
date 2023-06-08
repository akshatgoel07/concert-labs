import React, { useEffect } from 'react';

const TopSongs = () => {
    var accessToken = localStorage.getItem("spotifyToken")
  useEffect(() => {
    fetch('https://api.spotify.com/v1/me/top/tracks', {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    })
      .then(response => response.json())
      .then(data => {
        // Process the response data containing the user's top listened songs
        const songNames = data.items.map(song => song.name);
        console.log(songNames);
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

export default TopSongs;
