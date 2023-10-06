// components/Landing.js
"use client";
import React, { useEffect, useState } from "react";
import {TypeAnimation} from "react-type-animation";
import "../css/landing.css";
import Wave from "react-wavify";





const Landing = () => {
  const [amplitude, setAmplitude] = useState(0);

  useEffect(() => {
    const username = 'kevin21018212'; 
    const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

    const fetchContributions = async () => {
      try {
        const today = new Date();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(today.getDate() - 7);

        const response = await fetch(`https://api.github.com/users/${username}/events`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const events = await response.json();
        const pushesThisWeek = events.filter((event: { created_at: string | number | Date; type: string; }) => {
          const eventDate = new Date(event.created_at);
          return event.type === 'PushEvent' && eventDate >= oneWeekAgo;
        });

        setAmplitude(pushesThisWeek.length);
      } catch (error) {
        console.error('Error fetching GitHub pushes:', error);
      }
    };

    fetchContributions();
  }, []);
 
  return (
    <div className="landing-container">
      <div className="landing-content">
          <p className="landing-title">Hi, I'm Matthew </p>
        <div className="landing-typewriter">
          <div className="texttitle">
          <TypeAnimation
            sequence={["Developer", 3000, "Programmer", 3000, "Designer", 3000]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
          </div>
        </div>
      </div>
      <div className="landing-cluster">  
        <div className="wave-box">
          <div className="wave-text">This week: {amplitude}</div>
            <div className="wave">
            <Wave
              fill="#FAF9F6"
              paused={false}
              options={{
                height: 30,
                amplitude: amplitude * 8,
                speed: 0.1,
                points: 3,
              }}
            />
            </div>
          </div>
          <div className="updates-box">
            <div className="updates-header"><p className="texttitle">Updates</p></div>
            <div className='updates-content'>

              <div className="grid-item">83577b6</div>
              <div className="grid-item">PortfolioV2 --2 hours ago</div>
              <div className="grid-item">7d84e2a</div>
              <div className="grid-item">Kev vs Ian --6 days ago </div>
              <div className="grid-item">a19f5c8</div>
              <div className="grid-item">whatisKevBumpin --10 days ago</div>
              <div className="grid-item">3b61d9e</div>
              <div className="grid-item">PortfolioV2 --30 days ago</div>
              <div className="grid-item">3b61d9e</div>
              <div className="grid-item">PortfolioV2 --30 days ago</div>
            
            </div>
          </div>
          <div className="image-box">

          </div>
      </div>
    </div>
  );
};
export default Landing;
