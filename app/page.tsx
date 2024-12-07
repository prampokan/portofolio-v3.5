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
import BlurFade from "@/components/ui/blur-fade";
import { HeartOff, MoveUpRight } from "lucide-react";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <main className="w-full flex justify-center py-32 px-5 sm:px-0" id="home">
      <div className="w-full max-w-sm">
        {/* HOME */}
        <section>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h1 className="text-2xl font-semibold tracking-tight">
              {DATA.name}
            </h1>
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
          </BlurFade>
        </section>

        {/* WORK EXPERIENCE */}
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <section className="pt-28" id="work">
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
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <section className="pt-28" id="project">
            <h1 className="text-xl font-semibold tracking-tight">
              Recent Projects
            </h1>
            <p className="mt-5 leading-loose">{DATA.project}</p>
            <div className="grid grid-cols-2 gap-2 mt-7">
              {DATA.projects.map((item, i) => (
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
        </BlurFade>

        {/* CHATS */}
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <section className="pt-28" id="chat">
            <Chat />
          </section>
        </BlurFade>

        {/* CALL TO ACTION */}
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
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
        </BlurFade>
      </div>
    </main>
  );
}
