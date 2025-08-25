"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      title: "Best decision",
      text: "Our goal was to streamline SMB trade, making it easier and faster than ever and we did it together.",
      author: "Bilal Khawaja",
      avatar: "https://github.com/shadcn.png",
    },
    {
      title: "Amazing support",
      text: "The team was supportive from start to finish, making the whole process seamless and efficient.",
      author: "Jane Doe",
      avatar: "https://github.com/janedoe.png",
    },
    {
      title: "Exceeded expectations",
      text: "I never thought our workflow could improve this much. Highly recommended!",
      author: "John Smith",
      avatar: "https://github.com/johnsmith.png",
    },
    {
      title: "Game changer",
      text: "This completely changed how we operate day-to-day. Couldn’t be happier.",
      author: "Sara Lee",
      avatar: "https://github.com/saralee.png",
    },
    {
      title: "Fantastic results",
      text: "From start to finish, it was a great experience with tangible results.",
      author: "Alex Kim",
      avatar: "https://github.com/alexkim.png",
    },
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="py-20 lg:py-30 w-full px-4 sm:px-6 md:px-10 lg:px-20 sm:py-16 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-semibold text-left">
            What our clients think
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <User className="w-8 h-8 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">{testimonial.title}</h3>
                        <p className="text-muted-foreground max-w-xs text-base">
                          {testimonial.text}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">By</span>{" "}
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>
                            {testimonial.author.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span>{testimonial.author}</span>
                      </p>
                    </div>
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
