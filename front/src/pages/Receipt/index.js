import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sphere from "../../assets/sphere.svg";
import Arrow from "../../assets/arrow.svg";
import html2canvas from "html2canvas";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer"
import BackGroundImg from "../../assets/wrinkled-bg.png"
import CurrentDate from "../../components/Date/CurrentDate";
import "./receipt.css";
const TopArt = () => {
    const location = useLocation();
    useEffect(() => {
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
                    // navigate("about");
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
    return (
        <div className="receipt">
            <Navbar />
            <div className="receipt__outer">
                <div className="ticket" 
                style={{backgroundImage: `url(${BackGroundImg})`}}
                >
                    <div className="ticket__top-heading">
                       Concert Pass
                    </div>
                    <div className="sub-heading">
                        <div className="ticket__date"><CurrentDate /></div>
                    </div>
                    <div className="ticket__username">
                        Pass for {name}
                        <div className="ticket__category">{randomCategory}</div>
                    </div>
                    <div className="ticket__top-artists">
                        <h1 className="ticket__artist-heading">Concert LineUp</h1>
                        <div className="ticket__artists">
                            {artists.slice(0, 10).map((it, index) => (
                                <div key={it} className="ticket__artist-item">
                                    {index + 1}. {it}
                                </div>
                            ))}
                        </div>
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
            <Footer />
        </div>
    );
};
export default TopArt;
