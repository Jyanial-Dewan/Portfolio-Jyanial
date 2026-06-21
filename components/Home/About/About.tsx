import SectionHeading from "@/components/Helper/SectionHeading";
import { highlights, stats } from "@/data";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900 space-y-6">
      {/* Section Heading */}
      <SectionHeading
        title_1="About"
        title_2="Me"
        description="Get to know the developer behind the code"
      />

      <div className="grid w-[80%] lg:grid-cols-2 mx-auto items-center gap-12">
        {/* Image */}
        <div className="relative">
          <div className="aspect-square rounded-2xl p-2 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profileImage"
              width={700}
              height={700}
              className="w-full h-full object-center rounded-xl"
            />
          </div>
        </div>
        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            A passionate developer who loves to create
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m a full-stack developer with over 5 years of experience
            building web applications. My journey started with curiosity about
            how websites work, and it has evolved into a passion for creating
            seamless, user-focused digital experiences.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Beyond coding, I&apos;m dedicated to sharing knowledge. I&apos;ve
            taught over 1000 students through online courses and mentorship
            programs. I believe in continuous learning and staying updated with
            the latest technologies.
          </p>
          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {highlights.map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-sm">
                <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-blue-500" />
                </div>
                <span className="text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-[80%] mx-auto">
        {stats.map((item) => (
          <div
            key={item.value}
            className="bg-white dark:bg-gray-800 shadow rounded-xl text-center p-2"
          >
            <div className="text-2xl font-bold mb-2 text-purple-600">
              {item.value}
            </div>
            <div className="text-sm text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
