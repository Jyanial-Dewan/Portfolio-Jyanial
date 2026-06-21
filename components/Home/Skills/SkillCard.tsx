import { LucideIcon } from "lucide-react";
import React from "react";

interface Props {
  name: string;
  icon: LucideIcon;
}

const SkillCard = ({ icon: Icon, name }: Props) => {
  return (
    <div className="relative bg-white dark:bg-purple-900 shadow-md rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-all duration-300 w-36">
      <div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-400 to-blue-400 flex items-center justify-center hover:from-purple-300 hover:to-blue-800 transition-all duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  );
};

export default SkillCard;
