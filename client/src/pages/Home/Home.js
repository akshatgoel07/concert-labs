import React from "react";
import { useEffect } from "react";
import NavBar from "../../components/NavBar";
import BodyComponent from "../../components/BodyComponent";
import { useNavigate } from "react-router-dom";
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

  return(
    <>
       <NavBar />
       <BodyComponent / >
       {/* <Footer /> */}
    </>
    );
};

export default Home;