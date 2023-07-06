import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Sphere from '../../assets/sphere.svg'
import { useEffect } from 'react'
    const TopArt = () => {
        const [artists,setArtists] = useState([])
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
            setArtists(artistNames);
            
        })
        .catch(error => {
          // Handle any errors that occurred during the request
          console.error(error);
        });
      }, []); // Empty dependency array to ensure the code runs only once on component mount
    
  return (
    <div>
        <Navbar />
        <div className='select'>
            <div className="ticket">
                <div className="circle">
                    <img src={Sphere} alt="" />
                </div>
                <div className="name">
                    
                </div>
                <div className="topArtists">
                    <h1>Concert LineUp</h1>
                    artists.map
                </div>
            </div>
        </div>
    </div>
  )
}
export default TopArt;