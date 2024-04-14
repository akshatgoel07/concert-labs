import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";

import BackGroundImg from "../../assets/receipt-bg.jpg";
import Arrow from "../../assets/arrow.svg";
import DottedLine from "../../assets/dottedLine.svg";
import music from "../../assets/music.svg";
import Barcode from "../../assets/barcode.svg";

import "./receipt.css";

const TopArt = () => {
    const date = new Date();

    const [artists, setArtists] = useState([]);
    const [token, setToken] = useState(null);
    const [userName, setUserName] = useState("Mysterious?");
    const name = localStorage.getItem("concertLabsUsername");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const profileData = await fetchProfile(token);
                const artistNames = await fetchTopArtists(token);
                setArtists(artistNames);
                setUserName(profileData.display_name);
            } catch (error) {
                console.error(error);
            }
        };
        const getToken = () => {
            if (!token) {
                var urlParams = new URLSearchParams(
                    window.location.hash.substring(1)
                );
                setToken(urlParams.get("access_token"));
                console.log(token);
            }
            console.log(token);
        };
        getToken();
        if (token) {
            fetchData();
        }
    }, [token]);

    const downloadReceipt = () => {
        const receipt = document.querySelector(".ticket");

        html2canvas(receipt).then((canvas) => {
            const image = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = image;
            link.download = "receipt.png";
            link.click();
        });
    };
    async function fetchProfile(token) {
        const response = await fetch("https://api.spotify.com/v1/me", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        if (response.status === 401) {
            localStorage.removeItem("spotifyToken");
            throw new Error("Failed to fetch profile");
        }
        return response.json();
    }

    async function fetchTopArtists(token) {
        const response = await fetch(
            "https://api.spotify.com/v1/me/top/artists",
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
                token,
            }
        );
        if (response.status === 401) {
            localStorage.removeItem("spotifyToken");
            throw new Error("Failed to fetch top artists");
        }
        const data = await response.json();
        return data?.items?.map((artist) => artist.name) || [];
    }

    return (
        <div className="receipt">
            <Navbar />
            <div className="receipt__outer">
                <div
                    className="ticket"
                    style={{ backgroundImage: `url(${BackGroundImg})` }}
                >
                    <div className="ticket__top-heading">CONCERT PASS</div>
                    <div className="dotted_data">
                        <div className="date_data">
                            <div className="date_data-img"></div>
                            <img src={DottedLine} alt="a dotted line" />
                            Date:&nbsp; {date.toDateString()}
                        </div>
                        <p className="time_data">
                            Time:&nbsp; {date.toLocaleTimeString()}
                        </p>
                        <img src={DottedLine} alt="a dotted line" />
                    </div>

                    <div className="ticket__top-artists">
                        <div className="items">
                            <p>QTY</p>
                            <p>ITEM</p>
                            <p></p>
                        </div>
                        <div className="ticket__artists-grid">
                            {artists.length > 0 ? (
                                artists
                                    .slice(0, 10)
                                    .map((artistName, index) => (
                                        <div
                                            key={artistName}
                                            className="ticket__artist-item"
                                        >
                                            <div className="ticket__artist-rank">
                                                {index + 1}
                                            </div>{" "}
                                            <div className="ticket__artist-name">
                                                {artistName}
                                            </div>{" "}
                                        </div>
                                    ))
                            ) : (
                                <div className="no-artists-message">
                                    Let me cook up some artists for you!
                                </div>
                            )}
                        </div>
                    </div>
                    <img src={DottedLine} alt="a dotted line" />
                    <div className="bottom_details">
                        <div className="item-count">
                            <p>ITEM COUNT:</p>
                            <p>10</p>
                        </div>
                        <div className="total">
                            <p>TOTAL:</p>
                            <p>34:50</p>
                        </div>
                    </div>

                    <img src={DottedLine} alt="a dotted line" />
                    <div className="bottom">
                        <div className="cardHolder">
                            <img src={music} alt="" />
                            <p>Card Holder: </p>
                            <p>{userName}</p>
                        </div>
                        <div className="barcode">
                            <img src={Barcode} alt="" />
                        </div>
                        <div className="link">
                            <a
                                href=" https://concert-labs.vercel.app/"
                                target="_blank"
                            >
                                <p>https://concert-labs.vercel.app/ </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button type="button" onClick={downloadReceipt}>
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
