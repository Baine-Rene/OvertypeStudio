import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Feature = () => (
  <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Projects</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left">
              Recent Projects!
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
              Highlights from my latest design projects.
            </p>
          </div>
        </div>

        <div className="rounded grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="relative bg-muted rounded-md aspect-square lg:aspect-auto lg:h-full overflow-hidden">
              <Image
                src="/images/features/image-1.png"
                alt="Pay supplier invoices preview"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <User className="w-8 h-8 stroke-1 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl tracking-tight">New IWIP app user interface</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                I designed a new user interface for the IWIP app, focusing on creating a more intuitive and visually engaging experience.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative bg-muted rounded-md aspect-square overflow-hidden">
              <Image
                src="/images/features/image-2.png"
                alt="Pay supplier invoices preview"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <User className="w-8 h-8 stroke-1 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl tracking-tight">Green Lens Logo</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Logo design for Green Lens, a Young Eye International series showcasing the creativity and solutions of young changemakers.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative bg-muted rounded-md aspect-square overflow-hidden">
              <Image
                src="/images/features/image-3.png"
                alt="Pay supplier invoices preview"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <User className="w-8 h-8 stroke-1 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl tracking-tight">Concept Logo for Booking app</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Developed a concept logo for a mobile booking app.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="relative bg-muted rounded-md aspect-square lg:aspect-auto lg:h-full overflow-hidden">
              <Image
                src="/images/features/image-4.png"
                alt="Pay supplier invoices preview"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <User className="w-8 h-8 stroke-1 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl tracking-tight">Updated young & restless Logo</h3>
              <p className="text-muted-foreground max-w-xs text-base">
                Made subtle refinements to the Young & Restless logo by adjusting its color palette to create a fresher, more cohesive look while maintaining the brand’s original identity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
