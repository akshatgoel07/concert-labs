import Navbar from '../../components/Navbar';
import Tickets from '../../assets/ticket.svg';
import Footer from '../../components/Footer/Footer';
import { fetchSpotifyAuthorizationUrl } from './api';
import { createButton } from './buttonFactory';
const Home = () => {

  const handleGenerateClick = () => {
    const authorizationUrl = fetchSpotifyAuthorizationUrl();
    window.location.href = authorizationUrl;
  };

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
