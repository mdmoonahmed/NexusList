import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import CTA from "./components/CTA";

export default function Home() {
  return (
     <main>
        <Hero></Hero>
        <Features></Features>
        <Stats></Stats>
        <CTA></CTA>
     </main>
  );
}
