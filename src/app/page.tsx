import { Header } from "../features/Header";
import { Hero } from "./home/components/hero";
import { Case } from "./home/components/cases";
import { Feature } from "./home/components/features";
import { Stats } from "./home/components/stats";
import { Testimonials } from "./home/components/testimonials";
import { Footer } from "../features/footer";
import {Contact} from "./home/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Case />
      <Feature />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
