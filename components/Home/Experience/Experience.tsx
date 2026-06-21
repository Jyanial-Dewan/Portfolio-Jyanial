import SectionHeading from "@/components/Helper/SectionHeading";
import { experiences } from "@/data";
import { Briefcase, GraduationCap } from "lucide-react";
import React from "react";

const Experience = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900 space-y-6">
      <SectionHeading
        title_1="Experience &"
        title_2="Education"
        description="My professional journey and academic background"
      />
      <div className="relative px-6 max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-blue-400 to-blue-900 md:-translate-x-px"></div>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Timeline node */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center z-20">
              {experience.type === "work" ? (
                <Briefcase className="w-4 h-4 text-blue-500" />
              ) : (
                <GraduationCap className="w-4 h-4 text-blue-500" />
              )}
            </div>
            {/* Content */}
            <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)]">
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2 text-sm text-blue-500 mb-2">
                  <span className="px-3 py-1 bg-blue-600/10 rounded-full font-medium">
                    {experience.period}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1">
                  {experience.title}
                </h3>
                <p className="mb-4">{experience.company}</p>
                <p className="text-muted-foreground text-sm mb-2">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((item, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 rounded-md bg-indigo-600"
                    >
                      <p className="text-sm text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
