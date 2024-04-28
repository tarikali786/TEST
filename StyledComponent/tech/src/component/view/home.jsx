import { About } from "../Home/About";
import { Contact } from "../Home/Contact";
import { FAQ } from "../Home/FAQ";
import { Feature } from "../Home/Feature";
import { Hero } from "../Home/Hero";
import { Pricing } from "../Home/Pricing";
import { Work } from "../Home/Work";

export const Apphome = () => {
  return (
    <div className="main">
      <Hero />
      <About />
      <Feature />
      <Work />
      <FAQ />
      <Pricing />
      <Contact />
    </div>
  );
};
