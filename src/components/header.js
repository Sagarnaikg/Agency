import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/arrow-up.svg";

// gsap
import gsap from "gsap";

const Header = () => {
  let location = useLocation();
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    setMenuState(false);
  }, [location])

  useEffect(() => {
    const tl = gsap.timeline();
    if (menuState) {
      gsap.to("nav", { css: { display: "block" } });
      gsap.to("body", { css: { overflow: "hidden" } });

      //open animation
      tl.to(".App", 1, {
        y: "100vh",
        ease: "expo.inOut",
      })
        .to(".hamberger-menu-open span", 0.6, {
          delay: -1,
          scaleX: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to("#Path_1", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to("#Path_2", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#Line_1", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to("#circle", 0.6, {
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to(".hamberger-menu-close", 0.6, {
          delay: -0.8,
          css: {
            display: "block",
          },
        });
    } else {
      // close animation

      tl.to(".App", 1, {
        y: "0",
        ease: "expo.inOut",
      })
        .to("#circle", 0.6, {
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to("#Path_1", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Path_2", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Line_1", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to(".hamberger-menu-close", 0, {
          css: {
            display: "none",
          },
        })
        .to(".hamberger-menu-open span", 0.6, {
          delay: -0.6,
          scaleX: 1,
          transformOrigin: "0% 0%",
          ease: "expo.inOut",
        });
    }
  }, [menuState]);

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/animated-landing-page-React/">
              AGENCY
            </a>
          </div>
          <div className="nav-toggle">
            <div
              className="hamberger-menu-open"
              onClick={() => setMenuState(true)}
            >
              <span></span>
              <span></span>
            </div>
            <div
              className="hamberger-menu-close"
              onClick={() => setMenuState(false)}
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
