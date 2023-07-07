import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sphere from "../../assets/sphere.svg";
import Arrow from "../../assets/arrow.svg";
import html2canvas from 'html2canvas';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TopArt = () => {
    const navigate = useNavigate();
    const [artists, setArtists] = useState([]);
    console.log(accessToken);
    var accessToken = localStorage.getItem("spotifyToken");
    useEffect(() => {
        fetch("https://api.spotify.com/v1/me/top/artists", {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if(data.status === 401){
                    localStorage.removeItem("spotifyToken")
                    navigate("about")
                  }
                // Process the response data containing the user's most played artists
                const artistNames = data.items.map((artist) => artist.name);
                setArtists(artistNames);
            })
            
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error(error);
            });
    }, []); // Empty dependency array to ensure the code runs only once on component mount
    const categories = [
        "Curious",
        "Avid Listener",
        "Elite Taste",
        "Rare Taste",
        "Underrated Artists",
        "Expressive",
        "Tune Architect",
        "Melancholic",
        // Add more categories as needed
    ];
    const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];

        function downloadReceipt() {
          const receipt = document.querySelector('.ticket');
        
          html2canvas(receipt)
            .then(canvas => {
              const image = canvas.toDataURL('image/png');
              const link = document.createElement('a');
              link.href = image;
              link.download = 'receipt.png';
              link.click();
            });
        }
    return (
        <div className="receipt">
            <Navbar />
            <div className="outer">
                <div className="ticket">
                    <div className="circle">
                        <img src={Sphere} alt="" />
                    </div>
                    <div className="name">
                        Akshat
                        <div className="category">{randomCategory}</div>
                    </div>
                    <div className="topArtists">
                        <h1 className="artist-heading">Concert LineUp</h1>
                        {/* artists.map */}
                    </div>
                </div>
            </div>
            <div className="buttons">
            <button type="button" onClick={() => {downloadReceipt()}}>
                <img src={Arrow} alt="" />
                <p>Download</p>
            </button>
            <button type="button" onClick={() => {}}>
                <img src={Arrow} alt="" />
                <p>Share</p>
            </button>
            </div>
        </div>
    );
};
export default TopArt;
