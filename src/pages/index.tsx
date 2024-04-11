import { ProjectCarousel } from "@/components/project-carousel";
import { TextArea } from "@/components/text-area";
import Image from "next/image";
import { NavigationBar } from "@/components/navigation-bar";
import { CardTitle } from "@/components/ui/card";
import { SkillCard } from "@/components/skill-card";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GithubIcon from "@/components/ui/githubicon";
import LinkedInIcon from "@/components/ui/linkedinicon";

export default function Home() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const carouselAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      carouselAnimation.start("visible");
    }
  }, [inView]);

  return (
    <div className="bg-[#ffffff]">
      <NavigationBar></NavigationBar>
      <div className="flex flex-col items-center gap-16 py-36 pb-60">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
          >
            <div className="flex flex-row md:gap-36 gap-8 items-end">
              <div className="rounded-[80px] overflow-hidden">
                <Image
                  src={"/scholarship_headshot.jpg"}
                  width={398}
                  height={632}
                  alt="EL"
                ></Image>
              </div>
              <div className="object-bottom align-bottom h-full font-opensans tracking-widest">
                <h1 className="scroll-m-20 text-[52px] font-bold">
                  Pleased to meet you, <br></br>
                  I'm <span className="text-[#2876FA]">Esther Lee</span>
                </h1>
                <p className="leading-tight [&:not(:first-child)]:mt-6 text-[22px] w-[530px]">
                  I’m a{" "}
                  <span className="text-[#2876FA]">software engineer</span>{" "}
                  studying at UIUC (graduating soon) 💙💻 <br></br>
                </p>
                <p className="leading-tight [&:not(:first-child)]:mt-6 text-[22px] w-[530px] flex gap-3 items-center">
                  Take a look at what I’ve been up to!{" "}
                  <Link
                    href={"https://github.com/su-esther"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="icon" size="icon">
                      <GithubIcon className="w-10 h-10"></GithubIcon>
                    </Button>
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/esther-lee-93651521b/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="icon" size="icon">
                      <LinkedInIcon className="w-10 h-10"></LinkedInIcon>
                    </Button>
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div ref={ref} className="flex flex-col items-center w-full">
        <AnimatePresence>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            animate={carouselAnimation}
            initial="hidden"
            transition={{ duration: 2, delay: 0.35 }}
          >
            <div className="flex flex-col">
              <CardTitle className="text-left text-5xl pt-9 pb-12">
                Past Involvements
              </CardTitle>
              <div className="flex flex-col gap-44">
                <div className="flex flex-row items-center gap-24">
                  <div>
                    <Image
                      src={"/opcode-logo.png"}
                      width={191}
                      height={33}
                      alt="logo of Operation Code"
                    ></Image>
                    <br></br>
                    <Image
                      src={"/opcode-preview.png"}
                      width={622}
                      height={446}
                      alt="image of website"
                    ></Image>
                  </div>
                  <div className="w-[347px] flex flex-col gap-4">
                    <h3 className="font-bold font-opensans text-[24px]">
                      Operation Code
                    </h3>
                    <p className="font-opensans text-[24px]">
                      Job platform optimized for veterans to find career
                      opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-24">
                  <div className="w-[347px] flex flex-col gap-4">
                    <h3 className="font-bold font-opensans text-[24px]">
                      Clearpath NYC
                    </h3>
                    <p className="font-opensans text-[24px]">
                      Map used by homeless youth to find resources.
                    </p>
                  </div>
                  <div>
                    <Image
                      src={"/cp-logo.png"}
                      width={191}
                      height={33}
                      alt="logo of ClearpathNYC"
                    ></Image>
                    <br></br>
                    <Image
                      src={"/cp-preview.png"}
                      width={622}
                      height={446}
                      alt="image of website"
                    ></Image>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-24">
                  <div>
                    <Image
                      src={"/poster-preview.png"}
                      width={622}
                      height={446}
                      alt="image of website"
                    ></Image>
                  </div>
                  <div className="w-[347px] flex flex-col gap-4">
                    <h3 className="font-bold font-opensans text-[24px]">
                      Research in Data Visualization
                    </h3>
                    <p className="font-opensans text-[24px]">
                      Creating network graphs from Twitter timelines. Focused on
                      victims of hate speech.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer></Footer>
    </div>
  );
}
