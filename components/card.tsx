import Image from "next/image";
import Link from "next/link";
import { Globe, Github } from "lucide-react";

interface CardProps {
  title: string;
  image: string;
  description: string;
  tech: string[];
  website?: string;
  github?: string;
}

export default function Card({
  title,
  image,
  description,
  tech,
  website,
  github,
}: CardProps) {
  return (
    <div className="border h-auto rounded-xl overflow-hidden">
      <Link href={website || "/"} target="_blank" className="w-full">
        <Image src={image} alt="Image" width={500} height={500} />
      </Link>
      <div className="p-3 border-t">
        <div>
          <h1 className="font-semibold">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex flex-wrap mt-5 gap-1">
          {tech.map((item) => (
            <span className="bg-zinc-100 dark:bg-zinc-900 text-[11px] p-1 rounded-md">
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {website && (
            <Link
              href={website}
              target="_blank"
              className="bg-zinc-950 dark:bg-white text-white dark:text-black px-2 py-1 text-xs font-medium rounded-lg cursor-pointer flex items-center gap-x-1"
            >
              <Globe size="14" />
              Website
            </Link>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              className="bg-zinc-950 dark:bg-white text-white dark:text-black px-2 py-1 text-xs font-medium rounded-lg cursor-pointer flex items-center gap-x-1"
            >
              <Github size="14" />
              Github
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
