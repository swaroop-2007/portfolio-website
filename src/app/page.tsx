import { Hero } from "@/components/hero/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { SideProjects } from "@/components/sections/SideProjects";
import { Experience } from "@/components/sections/Experience";
import { SkillsAndCerts } from "@/components/sections/SkillsAndCerts";
import { EducationAndPublication } from "@/components/sections/EducationAndPublication";
import { Contact } from "@/components/sections/Contact";
import { Archive } from "@/components/sections/Archive";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1120px] px-4 md:px-6">
      <Hero />
      <SelectedWork />
      <SideProjects />
      <Experience />
      <SkillsAndCerts />
      <EducationAndPublication />
      <Contact />
      <Archive />
    </main>
  );
}
