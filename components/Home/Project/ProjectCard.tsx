import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BsGithub } from "react-icons/bs";

interface Props {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  demoUrl,
  githubUrl,
}: Props) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden:">
      {/* Image Container */}
      <div className="h-48 overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          height={400}
          width={40}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>
      {/* Main Content */}
      <div className="p-6">
        <h3 className="text-lg text-black dark:text-white font-semibold mb-2 hover:text-blue-500 transition-colors">
          {title}
        </h3>
        <p className="line-clamp-2 text-muted-foreground text-sm mb-6">
          {description}
        </p>

        {/* TechStacks */}
        <div className="flex flex-wrap mb-6 gap-2">
          {techStack.map((stack) => (
            <div key={stack} className="bg-indigo-600 px-2 rounded-full">
              <p className="text-white md:text-sm">{stack}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {demoUrl && (
            <Button asChild size={"sm"} className="flex-1">
              <a href={demoUrl} target="_blanck" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button asChild size={"sm"} className="flex-1" variant={"outline"}>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <BsGithub className="w-4 h-4" />
                Github URL
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
