import { Header } from "../features/Header";
import { Hero } from "../features/hero";
import { Case } from "../features/cases";
import { Feature } from "../features/features";
import { Stats } from "../features/stats";
import { Testimonials } from "../features/testimonials";
import { Footer } from "../features/footer";
import {Contact} from "../features/contact";
import { About } from "@/features/about";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Case />
      <About/>
      <Feature />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
