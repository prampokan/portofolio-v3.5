"use client";

import { Button } from "@/components/ui/button";
import Card from "@/components/card";
import { DATA } from "@/data/resume";
import { useState } from "react";

export default function Project() {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  return (
    <>
      <div className="w-full max-w-sm">
        <h1 className="text-xl font-semibold tracking-tight text-center">
          Recent Projects
        </h1>
        <p className="mt-5 leading-loose text-center">{DATA.project}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-4 my-7">
        {DATA.projects.slice(0, visibleProjects).map((item, i) => (
          <Card
            key={i}
            title={item.title}
            description={item.description}
            image={item.image}
            tech={item.tech}
            website={item.website}
            github={item.github}
          />
        ))}
      </div>
      {visibleProjects < DATA.projects.length && (
        <Button variant="outline" onClick={loadMoreProjects}>
          More
        </Button>
      )}
    </>
  );
}
