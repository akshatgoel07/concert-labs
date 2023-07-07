import React, {useEffect} from "react";
import Navbar from "../../components/Navbar";
import Arrow from "../../assets/arrow.svg";
import Tickets from "../../assets/ticket.svg";
import { useNavigate } from "react-router-dom";
export default function Index() {
    const Home = () => {
        const navigate = useNavigate() 
        const fetchProfile = async (token) => {
          const url = "https://api.spotify.com/v1/me";
          const response = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          const data = await response.json();
          if(response.status === 401){
            localStorage.removeItem("spotifyToken")
            navigate("about")
          }
          console.log(response)
          console.log("Profile Data:", data);
        };
        useEffect(() => {
          var token = localStorage.getItem("spotifyToken")
          if(!token){
              const urlParams = new URLSearchParams(window.location.hash.substring(1));
               token = urlParams.get("access_token");
              console.log("Access Token:", token);
              localStorage.setItem("spotifyToken",token);
          }
          fetchProfile(token);
        }, []);
      };
      
    const handleClick = () => {
        // alert("Button working")
        const clientId = "1620b101ae454685837ad774b688cb24";
        const redirectUrl = "http://localhost:3000/Receipt";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
          "user-read-private",
          "user-read-email",
          "user-modify-playback-state",
          "user-read-playback-state",
          "user-read-currently-playing",
          "user-read-recently-played",
          "user-top-read",
        ];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
          " "
        )}&response_type=token&show_dialog=true`;
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
                        <p>This will be a demo subtitle for the header</p>
                    </div>
                </div>
                <button type="button" onClick= {() => 
                {handleClick()}
                }>
                    <img src={Arrow} alt="" />
                    <p>Generate</p>
                </button>
                <div className="display">
                    <p>Concert Ticket</p>
                    <img src={Tickets} alt="" />
                </div>
            </div>
        </div>
    );
}
