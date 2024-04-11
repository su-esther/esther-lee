import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { NavigationBar } from "@/components/navigation-bar";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useAnimate,
  useAnimation,
  useInView,
} from "framer-motion";

export default function About() {
  const [scope1, animate1] = useAnimate();

  const handleAnimate1 = async () => {
    animate1(
      scope1.current,
      {
        scale: 1.1,
      },
      {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
      }
    );
  };
  const [scope2, animate2] = useAnimate();

  const handleAnimate2 = async () => {
    animate1(
      scope2.current,
      {
        scale: 1.1,
      },
      {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
      }
    );
  };

  React.useEffect(() => {
    handleAnimate1();
    handleAnimate2();
  });

  return (
    <div className="bg-notion">
      <NavigationBar />
      <div className="flex flex-col p-20">
        <CardTitle className="text-left text-5xl pt-9 pb-12">
          Snapshot of my Journey
        </CardTitle>
        <div className="flex flex-row">
          <div className="flex flex-col gap-12">
            <div className="w-[347px] flex flex-col gap-2">
              <h3 className="font-bold font-opensans text-[24px]">
                Motorola Solutions Inc.
              </h3>
              <p className="font-opensans text-[24px]">
                Software Engineer Intern (In Progress)
              </p>
            </div>
            <div className="w-[347px] flex flex-col gap-2">
              <h3 className="font-bold font-opensans text-[24px]">
                State Farm RDC
              </h3>
              <p className="font-opensans text-[24px]">
                Technology Intern | NLP Voice
              </p>
            </div>
            <div className="w-[347px] flex flex-col gap-2">
              <h3 className="font-bold font-opensans text-[24px]">
                Hack4Impact
              </h3>
              <p className="font-opensans text-[24px]">
                Software Developer | Web Development
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="pl-[25rem]">
              <motion.div ref={scope1}>
                <Image
                  src={"/about1.png"}
                  alt="image of presentation"
                  width={300}
                  height={300}
                ></Image>
              </motion.div>
            </div>
            <div className="pl-[50rem]">
              <motion.div ref={scope2}>
                <Image
                  src={"/about2.png"}
                  alt="image of presentation"
                  width={300}
                  height={300}
                ></Image>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
