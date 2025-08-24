import { Header } from "./home/Header";
import { Hero } from "./home/hero";
import { Case } from "./home/cases";
import { Feature } from "./home/features";
import { Stats } from "./home/stats";
import { Testimonials } from "./home/testimonials";
import { Footer } from "./home/footer";
import {Contact} from "./home/contact";

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
