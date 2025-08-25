import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Feature = () => (
  <div className="py-20 lg:py-30 w-full px-4 sm:px-6 md:px-10 lg:px-20 sm:py-16 md:py-20">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Projects</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold text-left">
              What&apos;s new ?
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
              Here are some projects that I&apos;ve worked on this year
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex flex-col justify-between"
            style={{
              backgroundImage: "url('/images/features/image-1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <User className="w-8 h-8 stroke-1 text-white" />
            <div className="flex flex-col">
             
            </div>
          </div>

          <div
            className="rounded-md aspect-square p-6 flex flex-col justify-between"
            style={{
              backgroundImage: "url('/images/features/image-2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <User className="w-8 h-8 stroke-1 text-white" />
            <div>
              
            </div>
          </div>

          <div
            className="rounded-md aspect-square p-6 flex flex-col justify-between"
            style={{
              backgroundImage: "url('/images/features/image-3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <User className="w-8 h-8 stroke-1 text-white" />
            <div>
             
            </div>
          </div>

          <div
            className="rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex flex-col justify-between"
            style={{
              backgroundImage: "url('/images/features/image-4.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <User className="w-8 h-8 stroke-1 text-white" />
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
