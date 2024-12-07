import { ThemeToggler } from "./theme-toggler";
import { Button } from "./ui/button";
import Link from "next/link";
import { House, Briefcase, Code, MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const nav = [
  { icon: <House />, name: "Home", href: "#home" },
  { icon: <Briefcase />, name: "Experience", href: "#work" },
  { icon: <Code />, name: "Project", href: "#project" },
  { icon: <MessageCircle />, name: "Chat!", href: "#chat" },
];

export default function Navbar() {
  return (
    <div className="w-full flex justify-center items-end h-20 fixed z-30">
      <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-white dark:from-zinc-950 to-transparent z-40"></div>
      <div className="flex items-center gap-x-1 border rounded-lg p-1 bg-white dark:bg-zinc-950 shadow-xl z-50">
        {nav.map((item, i) => (
          <Tooltip delayDuration={100} key={i}>
            <TooltipTrigger asChild>
              <Link href={item.href || "#"}>
                <Button variant="ghost" size="icon">
                  {item.icon}
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <ThemeToggler />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Theme</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
