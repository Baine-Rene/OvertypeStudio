import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Stats = () => (
  <div className="py-20 lg:py-30 w-full px-4 sm:px-6 md:px-10 lg:px-20 sm:py-16 md:py-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
       
        <div className="flex justify-center items-center">
          <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <MoveUpRight className="w-4 h-4 mb-10 text-green-500" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                4,191
                <span className="text-muted-foreground text-sm tracking-normal">
                  +49.1%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Profile views
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <MoveUpRight className="w-4 h-4 mb-10 text-green-500" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
               214
                <span className="text-muted-foreground text-sm tracking-normal">
                  +35.4%
                </span>
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Profile visits
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                5 
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Businesses helped 
              </p>
            </div>
            <div className="flex gap-0 flex-col justify-between p-6 border rounded-md">
              <MoveUpRight className="w-4 h-4 mb-10 text-green-500" />
              <h2 className="text-4xl tracking-tighter max-w-xl text-left font-regular flex flex-row gap-4 items-end">
                1,600
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                Reel & post views
              </p>
            </div>
          </div>
        </div>
         <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Stats</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-semibold text-left">
              Creative Impact by the Numbers
            </h2>
            <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
             These numbers highlight the reach and engagement built through consistent design work and meaningful visual storytelling. Each project contributes to a growing audience and stronger connections with brands and communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
