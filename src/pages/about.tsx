import * as React from "react";

import { CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { NavigationBar } from "@/components/navigation-bar";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export default function About() {
  const ref = React.useRef(null);
  const carouselAnimation = useAnimation();
  const inView = useInView(ref, { once: true });
  React.useEffect(() => {
    if (inView) {
      carouselAnimation.start("visible");
    }
  }, [inView]);

  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setIsLoading(false);
  }, []);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex flex-col p-10 md:p-20" ref={ref}>
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
            <CardTitle className="text-left text-5xl pt-9 pb-12">
              My journey is about finding meaningful ways to{" "}
              <span className="text-[#2876FA]">positively impact</span> the
              community{" "}
            </CardTitle>
            <div className="flex flex-col justify-between lg:flex-row">
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold font-opensans text-[24px]">
                    Motorola Solutions Inc.
                  </h3>
                  <p className="font-opensans text-[24px]">
                    Software Engineer Intern (In Progress)
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold font-opensans text-[24px]">
                    State Farm RDC
                  </h3>
                  <p className="font-opensans text-[24px]">
                    Technology Intern | NLP Voice
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold font-opensans text-[24px]">
                    <Link
                      href={"https://uiuc.hack4impact.org/"}
                      target="_blank"
                      className="hover:text-[#2876FA]"
                    >
                      Hack4Impact
                    </Link>
                  </h3>
                  <p className="font-opensans text-[24px]">
                    Software Developer | Web Development
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold font-opensans text-[24px]">
                    <Link
                      href={
                        "https://cs.illinois.edu/broadening-participation-computing/programs/csambassadors/participants/45409"
                      }
                      target="_blank"
                      className="hover:text-[#2876FA]"
                    >
                      CS STARS / Crowd Dynamics Lab
                    </Link>
                  </h3>
                  <p className="font-opensans text-[24px]">
                    Student Researcher | Data Visualization
                  </p>
                </div>
              </div>
              <div className="md:px-12 py-12 md:py-8">
                {isLoading && <Skeleton className="h-[350px] w-[650px]" />}
                <Image
                  src={"/h4i.jpg"}
                  alt="img of favorite people"
                  onLoad={handleImageLoad}
                  className="rounded-3xl"
                  width={650}
                  height={650}
                ></Image>
                <p className="font-opensans text-[24px] text-center p-4">
                  Looking for{" "}
                  <span className="text-[#2876FA]">inspiration</span> 🔍
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
