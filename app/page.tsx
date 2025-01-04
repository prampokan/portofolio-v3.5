import Image from "next/image";
import Link from "next/link";
import Project from "./project/project";
import Chat from "./chat/chat";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Marquee from "@/components/ui/marquee";
import BlurFade from "@/components/ui/blur-fade";
import { MoveUpRight } from "lucide-react";
import { DATA } from "@/data/resume";
import Cal from "@/components/embed/cal";

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <main
      className="w-full flex flex-col items-center justify-center py-32 px-5 sm:px-0"
      id="home"
    >
      {/* HOME */}
      <section className="w-full max-w-sm">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-2xl font-semibold tracking-tight">{DATA.name}</h1>
          <p className="mt-5 leading-loose">{DATA.about}</p>
          <ul className="mt-5 flex gap-x-5">
            {DATA.socials.map((item, i) => (
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
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h1 className="text-xl font-semibold tracking-tight mt-20">
            Skills and Expertise
          </h1>
          <p className="mt-5 leading-loose">{DATA.skills}</p>
          <div className="relative overflow-hidden mt-7">
            <Marquee pauseOnHover className="[--duration:20s]">
              {DATA.tech.map((item, i) => (
                <div
                  key={i}
                  className="max-w-none flex items-center gap-x-2 mx-2 cursor-default"
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
        </BlurFade>
      </section>

      {/* WORK EXPERIENCE */}
      <BlurFade delay={BLUR_FADE_DELAY * 4} className="w-full max-w-sm">
        <section className="pt-28" id="experience">
          <h1 className="text-xl font-semibold tracking-tight">Experience</h1>
          <p className="mt-5 leading-loose">{DATA.experience}</p>
          <Accordion type="single" collapsible className="w-full mt-5">
            {DATA.experiences.map((item, i) => (
              <AccordionItem value={`item-${i + 1}`} key={i}>
                <AccordionTrigger>
                  <div className="flex items-center gap-x-4">
                    <div className="w-6 h-6 rounded-sm overflow-hidden">
                      <Image
                        src={item.logo || "/vercel.svg"}
                        alt="logo"
                        width={50}
                        height={50}
                        className="w-full"
                      />
                    </div>
                    {item.href ? (
                      <Link href={item.href || "/"} target="_blank">
                        {item.name}
                      </Link>
                    ) : (
                      <>{item.name}</>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </BlurFade>

      {/* PROJECTS */}
      <BlurFade delay={BLUR_FADE_DELAY * 5} className="w-full max-w-2xl">
        <section className="pt-28 flex flex-col items-center" id="project">
          <Project />
        </section>
      </BlurFade>

      {/* CHATS */}
      <BlurFade delay={BLUR_FADE_DELAY * 6} className="w-full max-w-sm">
        <section className="pt-28" id="chat">
          <Chat />
        </section>
      </BlurFade>

      {/* CALL TO ACTION */}
      <BlurFade delay={BLUR_FADE_DELAY * 7} className="w-full max-w-sm">
        <section className="flex justify-center mt-28">
          <Cal />
        </section>
      </BlurFade>
    </main>
  );
}
