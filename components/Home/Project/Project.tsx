import SectionHeading from "@/components/Helper/SectionHeading";
import { projects } from "@/data";
import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900 space-y-6">
      <div className="w-[80%] mx-auto">
        <SectionHeading
          title_1="Featured"
          title_2="Projects"
          description="A selection of my recent work and side projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
