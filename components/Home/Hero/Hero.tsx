"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center bg-[radial-gradient(circle_476px_at_54.8%_51.5%,_rgba(168,229,253,1)_0%,_rgba(244,244,254,1)_42.3%,_rgba(244,244,254,1)_100.2%)] dark:bg-[radial-gradient(circle_farthest-corner_at_50%_52.5%,_rgba(14,53,92,1)_0%,_rgba(16,14,72,1)_90%)]">
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Sub Title */}
        <div className="sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <p>Available for opportunities</p>
          </span>
        </div>
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I&apos;m
          <span className="text-blue-800 dark:text-yellow-200">
            {" "}
            Jyanial Dewan
          </span>
        </h1>
        {/* Type Effect */}
        <div className="text-md sm:text-lg md:text-xl text-black dark:text-white font-semibold mb-6 sm:mb-8 h-12">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Full-Stack Developer",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "System Designer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        {/* Description */}
        <p className="text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10">
          Crafting exceptional digital experiences with moder technologies.
          Passionate about building scalable application.
        </p>
      </div>
    </div>
  );
};

export default Hero;
