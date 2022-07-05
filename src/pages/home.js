import React, { useEffect, useState } from "react";

import Overlay from "../components/overlay";
import Banner from "../components/banner";
import Cases from "../components/cases";

// gsap
import gsap from "gsap";

const introAnimation = (removeIntroOverlay) => {
  const tl = gsap.timeline();
  return tl
    .from(".line span", 0.8, {
      y: 100,
      ease: "power4.ease",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .from(".case-img img", 0.8, {
      scale: 1.4,
      delay: -1.6,
      stagger: {
        amount: 0.4,
      },
      onComplete: removeIntroOverlay,
    })
    .from(".cases-navigation", 1.6, {
      display: "none",
      opacity: 0,
      delay: 0.5,
      ease: "power4.ease",
    });
};

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const removeIntroOverlay = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    introAnimation(removeIntroOverlay);
  }, []);

  return (
    <div>
      {!animationComplete ? <Overlay /> : ""}
      <Banner />
      <Cases />
    </div>
  );
};

export default Home;
