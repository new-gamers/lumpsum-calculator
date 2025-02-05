import React from "react";
import { Info } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface InfoTooltipProps {
  content: string;
}

const InfoTooltip = ({ content }: InfoTooltipProps) => {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <button 
          className="inline-flex items-center focus:outline-none"
          onClick={(e) => e.preventDefault()}
          aria-label="Show information"
        >
          <Info className="h-4 w-4 inline-block ml-1 cursor-help text-muted-foreground hover:text-foreground transition-colors text-gray-700 dark:text-[#c1cbd6] hover:!text-inherit" />
        </button>
      </HoverCardTrigger>
      <HoverCardContent 
        side="top" 
        align="center"
        className="w-80 p-3 text-sm bg-white dark:bg-slate-900 border border-border shadow-lg"
      >
        {content}
      </HoverCardContent>
    </HoverCard>
  );
};

export default InfoTooltip;
