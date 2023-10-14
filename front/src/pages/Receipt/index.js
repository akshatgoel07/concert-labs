import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import CurrentDate from '../../components/Date/CurrentDate';

import BackGroundImg from '../../assets/wrinkled-bg.png';
import Arrow from '../../assets/arrow.svg';

import './receipt.css';

const TopArt = () => {
    const [artists, setArtists] = useState([]);
    const accessToken = localStorage.getItem('spotifyToken');
    const name = localStorage.getItem('concertLabsUsername');
    useEffect(() => {
            const urlParams = new URLSearchParams(
                window.location.hash.substring(1)
            );
            var token = urlParams.get("access_token");
            localStorage.setItem("spotifyToken", token);
    }, [window.location]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const profileData = await fetchProfile(accessToken);
                const artistNames = await fetchTopArtists(accessToken);
                setArtists(artistNames);

                const userName = profileData.display_name;
                localStorage.setItem('concertLabsUsername', userName);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [accessToken]);

    const categories = [
        'Curious',
        'Avid Listener',
        'Elite Taste',
        'Rare Taste',
        'Expressive',
        'Tune Architect',
        'Melancholic',
    ];

    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    const downloadReceipt = () => {
        const receipt = document.querySelector('.ticket');

        html2canvas(receipt).then((canvas) => {
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'receipt.png';
            link.click();
        });
    };

    return (
        <div className="receipt">
            <Navbar />
            <div className="receipt__outer">
                <div className="ticket" style={{ backgroundImage: `url(${BackGroundImg})` }}>
                    <div className="ticket__top-heading">
                        CONCERT PASS
                        <div className="ticket__category">{randomCategory}</div>
                    </div>
                    <div className="sub-heading">
                        {/* <div className="ticket__date"><CurrentDate /></div> */}
                    </div>
                    <div className="ticket__username">PASS FOR {name}</div>
                    <div className="ticket__top-artists">
                        <h1 className="ticket__artist-heading">Concert LineUp</h1>
                        <div className="ticket__artists">
                            {artists.length > 0 ? (
                                artists.slice(0, 10).map((artistName, index) => (
                                    <div key={artistName} className="ticket__artist-item">
                                        {index + 1}. {artistName}
                                    </div>
                                ))
                            ):(
                                <div className="no-artists-message">Token Expired</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button type="button" onClick={downloadReceipt}>
                    <img src={Arrow} alt="" />
                    <p>Download</p>
                </button>
                <button type="button" onClick={() => { /* Handle Share */ }}>
                    <img src={Arrow} alt="" />
                    <p>Share</p>
                </button>
            </div>
            <Footer />
        </div>
    );
};

async function fetchProfile(accessToken) {
    const response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + accessToken,
        },
    });
    if (response.status === 401) {
        localStorage.removeItem('spotifyToken');
        throw new Error('Failed to fetch profile');
    }
    return response.json();
}

async function fetchTopArtists(accessToken) {
    const response = await fetch('https://api.spotify.com/v1/me/top/artists', {
        headers: {
            Authorization: 'Bearer ' + accessToken,
        },
    });
    if (response.status === 401) {
        localStorage.removeItem('spotifyToken');
        throw new Error('Failed to fetch top artists');
    }
    const data = await response.json();
    return data?.items?.map((artist) => artist.name) || [];
}

export default TopArt;