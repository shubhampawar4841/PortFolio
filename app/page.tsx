import About from "@/components/about";
import Contact from "@/components/contact";
import Achievements from "@/components/achievements";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Profile from "@/components/Profile";
import CodingStats from "@/components/codingstats";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <CodingStats/>
      <Achievements />
      <Profile/>
      <Contact />
    </main>
  )
}
