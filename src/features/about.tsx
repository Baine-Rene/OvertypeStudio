import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const About = () => (
  <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
        <div className="relative rounded-md overflow-hidden h-80 lg:h-[400px] lg:w-1/2">
          <Image
            src="/images/about/image-3-copy-2.jpg"
            alt="Potrait image of founder"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
          <div>
            <Badge>About</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left">
             Meet the Founder
            </h2>
            <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              I’m Rene Baine, a computer science student specializing in software engineering. For the past three years, I’ve been creating graphic design work that blends creativity with a strong understanding of technology, helping brands and projects come to life visually and digitally.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);