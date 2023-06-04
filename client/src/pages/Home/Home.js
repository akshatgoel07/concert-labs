import React from "react";
import { useEffect } from "react";
import NavBar from "../../components/NavBar";
import BodyComponent from "../../components/BodyComponent";
import Footer from "../../components/Footer";
const Home = () => {
  const fetchProfile = async (token) => {
    const url = "https://api.spotify.com/v1/me";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    console.log("Profile Data:", data);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const token = urlParams.get("access_token");
    console.log("Access Token:", token);
    fetchProfile(token);
  }, []);
  return( 
    <>
       <NavBar />
       <BodyComponent />
       <Footer />
    </>
    );
};

export default Home;