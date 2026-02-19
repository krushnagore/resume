import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { EducationAndSkills } from "@/components/EducationAndSkills";

export default function Home() {
  return (
    <main className="min-h-screen py-10 px-4 md:px-8 max-w-4xl mx-auto print:p-0 print:max-w-none">
      <Hero />
      <Summary />
      <Experience />
      <Projects />
      <EducationAndSkills />
    </main>
  );
}
