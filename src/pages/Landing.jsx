// src/pages/Landing.jsx
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "../components/Home";
import Clients from "../components/Clients";
import Insight from "../components/Insight";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const Landing = ({ scrollToSection, updateLocomotiveScroll }) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    updateLocomotiveScroll();
  }, [updateLocomotiveScroll]);

  return (
    <>
      <Home
        loginWithRedirect={loginWithRedirect}
        logout={logout}
        isAuthenticated={isAuthenticated}
        user={user}
        updateLocomotiveScroll={updateLocomotiveScroll}
      />
      <Clients />
      <Insight />
      <Cta scrollToSection={scrollToSection} />
      <Footer scrollToSection={scrollToSection} />
    </>
  );
};

export default Landing;
