import { Badge } from "@/components/ui/badge";

export const About = () => (
  <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1"></div>
        <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
          <div>
            <Badge>About</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-bold text-left">
              A little about the founder
            </h2>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magni laudantium impedit recusandae! Odit cum fugit, harum exercitationem illo quasi blanditiis pariatur laboriosam impedit facere!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);