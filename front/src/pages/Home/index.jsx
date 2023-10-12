import React,{useState, useEffect} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Tickets from '../../assets/ticket.svg';
import Footer from '../../components/Footer/Footer';
import { fetchSpotifyAuthorizationUrl } from './api';
import { createButton } from './buttonFactory';
axios.defaults.baseURL = 'http://localhost:3001';
const Home = () => {
    axios.defaults.baseURL = 'http://localhost:3001'; 
  const navigate = useNavigate();

  const handleGenerateClick = () => {
    const authorizationUrl = fetchSpotifyAuthorizationUrl();
    window.location.href = authorizationUrl;
  };
// const [authUrl, setAuthUrl] = useState('');

//   useEffect(() => {
//     axios.get('generateSpotifyAuthUrl')
//       .then((response) => {
//         setAuthUrl(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const handleGenerateClick = () => {
//     if (authUrl) {
//         window.location.href = authUrl;
//       }
//   };

// To- do : Fix issue, problem with endpoints, server.js not working

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="content">
          <div className="lText">
            <p>Create your concert line up with your fav artist</p>
          </div>
          <div className="rText">
            <p>The All green offsprings, guns and the melody</p>
          </div>
        </div>
        {createButton('generate', handleGenerateClick)}
        <div className="cb">
          <p>Top Track Generator</p>
          <img className="phone-image" src={Tickets} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
