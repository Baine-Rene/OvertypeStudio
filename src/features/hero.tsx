"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {  PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "new", "wonderful", "beautiful"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="w-full flex items-center pt-34 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 text-center px-4">
          {/* Hero Text */}
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-regular tracking-tighter max-w-3xl">
              <span className="text-spektr-cyan-50">Lets Build Something</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non exercitationem iste molestias harum ea iure commodi eaque quidem perspiciatis laudantium.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-row gap-3">
            <a href="tel:+6838830171">
              <Button className="gap-4 font-semibold" size="lg">
                Jump on a call
                <PhoneCall className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
