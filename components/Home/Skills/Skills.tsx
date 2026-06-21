import SectionHeading from "@/components/Helper/SectionHeading";
import { skillCategories } from "@/data";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900 space-y-6">
      <div className="w-[80%] mx-auto">
        <SectionHeading
          title_1="Technical"
          title_2="Skills"
          description="Technologies I've been working with recently"
        />
        <div className="space-y-12 flex flex-col">
          {skillCategories.map((ctg) => (
            <div key={ctg.title} className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <p className="text-sm font-medium">{ctg.title}</p>
              </div>
              <div className="flex gap-4 flex-wrap">
                {ctg.skills.map((skl) => (
                  <SkillCard key={skl.name} name={skl.name} icon={skl.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
