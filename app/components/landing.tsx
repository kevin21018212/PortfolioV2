// components/Landing.js
"use client";
import React, { useEffect, useState } from "react";
import {TypeAnimation} from "react-type-animation";
import "../componentcss/landing.css";
import Wave from "react-wavify";



const fetchWeeklyContributions = async (username:string) => {
  const today = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(today.getDate() - 7); // Calculate date one week ago

  const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

  const response = await fetch(`https://api.github.com/search/commits?q=author:${username}+author-date:${oneWeekAgo.toISOString()}..${today.toISOString()}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  const contributionCount = data.total_count;

  return contributionCount;
};

const Landing = () => {

 
  const username = 'kevin21018212'; // Replace with your GitHub username

  fetchWeeklyContributions(username)
    .then((contributions) => {
      console.log(`This week's contributions: ${contributions}`);
    })
    .catch((error) => {
      console.error('Error fetching contributions:', error);
    });


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
      <Wave fill='#32CD32' paused={false} options={{ height: 100,amplitude: 20, speed: 0.1, points: 3}}/>
      </div>
    </div>
  );
};
export default Landing;
