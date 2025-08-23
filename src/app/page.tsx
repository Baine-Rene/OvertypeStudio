import { Header } from "./home/Header";
import { Hero } from "./home/hero";
import { Case } from "./home/cases";
import { Feature } from "./home/features";
import { Stats } from "./home/stats";
import { Testimonials } from "./home/testimonials";
import { CTA } from "./home/cta";

export default function Home() {
  return (
       <>
       <Header />
       <Hero />
       <Case/>
       <Feature/>
       <Stats/>
       <Testimonials/>
       <CTA/>
       </>
  );
}
