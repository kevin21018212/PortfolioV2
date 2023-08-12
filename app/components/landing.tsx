// components/Landing.js
"use client";
import React, { useEffect, useState } from "react";
import {TypeAnimation} from "react-type-animation";
import "../componentcss/landing.css";
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
    
    <div className='landing-container'>
      <div className='landing-content'>
        <div className='landing-title'>
          <h1>Hi, I'm Matthew </h1>
        </div>
        <div className='landing-typewriter'>
          <TypeAnimation sequence={["Developer", 3000, "Programmer", 3000, "Designer", 3000]} wrapper='span' speed={10} repeat={Infinity} />
        </div>
      </div>
      <div className="landing-cluster">
      <div className="wave-text">This week:  {amplitude}</div>
      <div className="wave">
      <Wave fill='#32CD32' paused={false} options={{ height: 30,amplitude:(amplitude*8), speed: 0.1, points: 3}}/>
      </div>
    </div>
    </div>
  );
};
export default Landing;
