import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";

export default function Home() {
  return (
     <main>
        <Hero></Hero>
        <Features></Features>
        <Stats></Stats>
     </main>
  );
}
