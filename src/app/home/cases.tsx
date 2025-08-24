"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export const Case = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const images = [
    "/images/green-lens.png",
    "/images/young-restless.png",
    "/images/iwip.png",
    "/images/yahweh-sabaoth.png",
    "/images/young-eye.png",
  ];

  useEffect(() => {
    if (!api) return;

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [api, current]);

  return (

    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-semibold text-left">
            Trusted by Youth Lead Initiatives
          </h2>
           <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem
                  className="basis-1/4 lg:basis-1/6"
                  key={index}
                >
                  <div className="flex items-center justify-center p-4">
                    <Image
                      src={src}
                      alt={`Logo ${index + 1}`}
                      className="rounded-md object-contain w-full h-full"
                      width={656}
                      height={674}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
