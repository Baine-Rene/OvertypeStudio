import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Contact = () => (
  <div id="contact" className="py-20 lg:py-30 w-full px-4 sm:px-6 md:px-10 lg:px-20 sm:py-16 md:py-20 bg-muted">
    <div className="container mx-auto">
      <div className="flex flex-col text-center py-14 gap-4 items-center">
        <div>
          <Badge>Contact</Badge>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold">
            Get in Touch Today!
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
            Managing a small business today is already tough. Avoid further
            complications by ditching outdated, tedious trade methods. Our goal
            is to streamline SMB trade, making it easier and faster than ever.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <a href="tel:+6838830171">
            <Button className="gap-4 font-semibold" variant="outline">
              Jump on a call
              <PhoneCall className="w-4 h-4" />
            </Button>
          </a>
          <a href="mailto:info@overtypestudio.com">
            <Button className="gap-4 font-semibold bg-red-500">
              Email
              <Mail className="w-4 h-4" />
            </Button>
          </a>
          <a
            href="https://wa.me/773033668"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="gap-4 font-semibold bg-green-600">
              WhatsApp
              <MessageCircle className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
);
