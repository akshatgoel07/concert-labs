import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sphere from "../../assets/sphere.svg";
import Arrow from "../../assets/arrow.svg";
import html2canvas from "html2canvas";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";


const TopArt = () => {
    const location = useLocation();
    useEffect(() => {
        // console.log("Location:", location);
        // var token = localStorage.getItem("spotifyToken");
        // if (token) {
            const urlParams = new URLSearchParams(
                window.location.hash.substring(1)
            );
            var token = urlParams.get("access_token");
            // console.log("Access Token:", token);
            localStorage.setItem("spotifyToken", token);
        // }
    }, [window.location]);
    var name = localStorage.getItem("concertLabsUsername");
    const navigate = useNavigate();
    const [artists, setArtists] = useState([]);
    // console.log(accessToken);
    var accessToken = localStorage.getItem("spotifyToken");
    useEffect(() => {
        const fetchProfile = async (token) => {
            const url = "https://api.spotify.com/v1/me";
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            const data = await response.json();
            if (response.status === 401) {
                localStorage.removeItem("spotifyToken");
                // navigate("/");
                // window.location.reload();
                return;
            }
            // console.log(response);
            // console.log("Profile Data:", data);
            const userName = data.display_name;
            // console.log("User Name:", userName);
            localStorage.setItem("concertLabsUsername", userName);
        };
        var token = localStorage.getItem("spotifyToken");
        fetchProfile(token);
    }, []);
    useEffect(() => {
        fetch("https://api.spotify.com/v1/me/top/artists", {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 401) {
                    localStorage.removeItem("spotifyToken");
                    navigate("about");
                }
                console.log(data.items);
                // Process the response data containing the user's most played artists
                const artistNames = data?.items?.map((artist) => artist.name);
                setArtists(artistNames);
                console.log(artistNames);
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
        const receipt = document.querySelector(".ticket");

        html2canvas(receipt).then((canvas) => {
            const image = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = image;
            link.download = "receipt.png";
            link.click();
        });
    }
    const today = new Date();
    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear().toString();
        return `${day}-${month}-${year}`;
    };
    const formattedDate = formatDate(today);
    if (!name) {
        // window.location.reload();
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
                        {name}
                        <div className="category">{randomCategory}</div>
                    </div>
                    <div className="topArtists">
                        <h1 className="artist-heading">Concert LineUp</h1>
                        <div className="artists">
                            {artists.slice(0, 6).map((it, index) => (
                                <div key={it} className="artist-item">
                                    {index + 1}. {it}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="ticket-footer">
                        <div className="dateD">{formattedDate}</div>
                        <p>Concert Pass</p>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button
                    type="button"
                    onClick={() => {
                        downloadReceipt();
                    }}
                >
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
