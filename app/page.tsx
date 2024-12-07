import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card";
import Chat from "./chat/chat";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Marquee from "@/components/ui/marquee";
import { MoveUpRight } from "lucide-react";

const list = [
  { name: "Linkedin", href: "https://www.linkedin.com/in/pramudya-diagusta/" },
  { name: "Github", href: "https://github.com/prampokan" },
  { name: "Email" },
];

const tech = [
  {
    name: "Javascript",
    logo: "/javascript.png",
  },
  { name: "Typescript", logo: "/typescript.png" },
  { name: "React", logo: "/react.png" },
  { name: "Next", logo: "/next.png" },
  { name: "Astro", logo: "/astro.jpg" },
  { name: "Nest", logo: "/nest.svg" },
  { name: "Firebase", logo: "/firebase.png" },
  { name: "Supabase", logo: "/supabase.png" },
];

const experience = [
  {
    name: "Karya Super Dev",
    logo: "/karyasuperdev.png",
  },
  {
    name: "Oddin",
    logo: "/oddin.jpg",
  },
  {
    name: "Fn Digital Code",
    logo: "/fn.webp",
  },
  {
    name: "Bangkit Academy",
    logo: "/bangkit.png",
  },
  {
    name: "Desnet Technology",
    logo: "/desnet.webp",
  },
];

const projects = [
  {
    title: "CV Maker Indo",
    description: "Built your CV with just few clicks.",
    image: "/cvmaker.png",
    tech: ["Next.js", "Typescript", "Tailwind", "ShadCn", "Firebase"],
    website: "https://cvmakerindo.vercel.app/",
    github: "https://github.com/prampokan/cv-maker",
  },
  {
    title: "Fashion Online Shop",
    description: "Sass Website to sell your fashion products.",
    image: "/tokoonline.png",
    tech: ["Next.js", "Javascript", "Tailwind", "Firebase"],
    website: "https://pramolshop.vercel.app/shop",
    github: "https://github.com/prampokan/toko-online-next",
  },
  {
    title: "Bangkit Capstone Project",
    description: "Meatopia, Meat sales app with machine learning.",
    image: "/meatopia.png",
    tech: ["Kotlin", "Express.js", "Tensor Flow", "Google Colab", "GCP"],
    website: "https://meatopia.vercel.app/",
    github: "https://github.com/Meatopia-Capstone-Team-C241-PS192",
  },
  {
    title: "Website KKN",
    description: "Desa Turus, Kecamatan Polanharjo, Klaten",
    image: "/kkn.png",
    tech: ["Next.js", "Typescript", "Tailwind", "Firebase"],
    website: "https://www.desaturus.com/",
    github: "https://github.com/prampokan/website-kkn",
  },
];

export default function Home() {
  return (
    <main className="w-full flex justify-center py-32 px-5 sm:px-0" id="home">
      <div className="w-full max-w-sm">
        {/* HOME */}
        <section>
          <h1 className="text-2xl font-semibold tracking-tight">
            pramudya diagusta
          </h1>
          <p className="mt-5 leading-loose">
            a passionate software engineer who crafting dynamic and interactive
            applications.
          </p>
          <ul className="mt-5 flex gap-x-5">
            {list.map((item, i) => (
              <Link
                href={item.href || "/"}
                target="_blank"
                key={i}
                className="flex items-center gap-x-1 cursor-pointer hover:text-blue-500 transition-all duration-300 group"
              >
                {item.name}
                <MoveUpRight size="15" />
              </Link>
            ))}
          </ul>

          <h1 className="text-xl font-semibold tracking-tight mt-20">
            Skills and Expertise
          </h1>
          <p className="mt-5 leading-loose">
            I’m deeply in love with creating innovative, scalable, and efficient
            web applications. With years of experience in full-stack
            development, I specialize in building reliable solutions using
            modern frameworks and technologies.
          </p>
          <div className="relative overflow-hidden mt-7">
            <Marquee pauseOnHover className="[--duration:20s]">
              {tech.map((item, i) => (
                <div
                  key={i}
                  className="max-w-none flex items-center gap-x-2 mx-2"
                >
                  <Image
                    src={item.logo || "/vercel.svg"}
                    alt="logo"
                    width={20}
                    height={20}
                    className="rounded"
                  />
                  {item.name}
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-background"></div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="pt-28" id="work">
          <h1 className="text-xl font-semibold tracking-tight">
            Work Experience
          </h1>
          <p className="mt-5 leading-loose">
            I have several experiences in the field of software engineering,
            such as part-time job as a software engineer, independent studies,
            and internships.
          </p>
          <Accordion type="single" collapsible className="w-full mt-5">
            {experience.map((item, i) => (
              <AccordionItem value={`item-${i + 1}`} key={i}>
                <AccordionTrigger>
                  <div className="flex items-center gap-x-4">
                    <div className="w-8 h-8">
                      <Image
                        src={item.logo || "/vercel.svg"}
                        alt="logo"
                        width={50}
                        height={50}
                        className="w-full"
                      />
                    </div>
                    {item.name}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* PROJECTS */}
        <section className="pt-28" id="project">
          <h1 className="text-xl font-semibold tracking-tight">
            Recent Projects
          </h1>
          <p className="mt-5 leading-loose">
            I work on a variety of projects, from building my own products and
            handling client requests to experimenting with fun, side projects.
          </p>
          <div className="grid grid-cols-2 gap-2 mt-7">
            {projects.map((item, i) => (
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
        </section>

        <section className="pt-28" id="chat">
          <Chat />
        </section>

        {/* CALL TO ACTION */}
        <section className="flex justify-center mt-28">
          <div className="h-[13rem] w-[25rem] border-2 dark:border-zinc-800 border-zinc-100 bg-zinc-50 dark:bg-zinc-900 rounded-lg cursor-pointer -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300 p-5 relative">
            <div className="absolute">
              <h1 className="font-semibold text-lg tracking-tight">
                Have any ideas?
              </h1>
              <p className="text-sm">Let's make it real.</p>
            </div>
            <div className="p-1.5 bg-white w-20 h-24 overflow-hidden border dark:border-white absolute right-4 rotate-3">
              <Image
                src="/face.jpg"
                alt="face"
                width={100}
                height={100}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute bottom-4">
              <h1 className="text-sm font-semibold">Pramudya Diagusta</h1>
              <p className="text-xs text-zinc-500">prampokan@gmail.com</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
