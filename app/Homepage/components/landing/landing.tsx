"use client";
import React, { useEffect, useState } from "react";

import "../../css/landing/landing.css";
import LandingCluster from "./landingcluster";
import LandingText from "./landingtext";

const Landing = () => {
  const [amplitude, setAmplitude] = useState(0);

  useEffect(() => {
    const username = "kevin21018212";
    const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

    const fetchContributions = async () => {
      try {
        const today = new Date();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(today.getDate() - 7);

        const response = await fetch(
          `https://api.github.com/users/${username}/events`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const events = await response.json();
        const pushesThisWeek = events.filter(
          (event: { created_at: string | number | Date; type: string }) => {
            const eventDate = new Date(event.created_at);
            return event.type === "PushEvent" && eventDate >= oneWeekAgo;
          }
        );

        setAmplitude(pushesThisWeek.length);
      } catch (error) {
        console.error("Error fetching GitHub pushes:", error);
      }
    };

    fetchContributions();
  }, []);

  return (
    <div className="landing-container">
      <LandingText />
      <LandingCluster amplitude={amplitude} />
    </div>
  );
};
export default Landing;
