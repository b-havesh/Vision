import React, { useEffect, useRef, useCallback } from "react";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

const App = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);
  const location = useLocation();

  // Function to initialize Locomotive Scroll
  const initializeLocomotiveScroll = useCallback(() => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.destroy();
    }

    // Initialize Locomotive Scroll
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      multiplier: 0.8,
      lerp: 0.07,
    });

    // Simulate a resize event to trigger re-calculation
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
  }, []);

  useEffect(() => {
    initializeLocomotiveScroll();

    const handleResize = () => {
      if (locomotiveScrollRef.current) locomotiveScrollRef.current.update();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (locomotiveScrollRef.current) locomotiveScrollRef.current.destroy();
    };
  }, [initializeLocomotiveScroll, location]); // Re-initialize on route change

  // Function to update Locomotive Scroll
  const updateLocomotiveScroll = useCallback(() => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.update();
    }
  }, []);

  const scrollToSection = (id) => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.scrollTo(id);
    }
  };

  return (
    <div id="content" data-scroll-container ref={scrollRef}>
      <Header
        loginWithRedirect={loginWithRedirect}
        isAuthenticated={isAuthenticated}
        user={user}
        logout={logout}
        scrollToSection={scrollToSection}
        updateLocomotiveScroll={updateLocomotiveScroll}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              scrollToSection={scrollToSection}
              updateLocomotiveScroll={updateLocomotiveScroll}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/landing" element={<Landing />} />
        <Route
          path="/product"
          element={
            <Product
              loginWithRedirect={loginWithRedirect}
              isAuthenticated={isAuthenticated}
              updateLocomotiveScroll={updateLocomotiveScroll}
            />
          }
        />
      </Routes>
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
