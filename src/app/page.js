import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import { Testimonials } from "./components/Testimonials";
import { Categories } from "./components/Categories";
import ComparisonSection from "./components/Comparison";

export default function Home() {
  return (
     <main>
        <Hero></Hero>
        <Categories></Categories>
        <Features></Features>
        <Stats></Stats>
        <ComparisonSection></ComparisonSection>
        <Testimonials></Testimonials>
        <CTA></CTA>
     </main>
  );
}
