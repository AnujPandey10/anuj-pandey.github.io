
import { HeroSection } from "@/components/hero/HeroSection";
import { SkillHeatmap } from "@/components/metrics/SkillHeatmap";
import { GitHubStats } from "@/components/metrics/GitHubStats";
import { ProjectBentoGrid } from "@/components/projects/ProjectBentoGrid";
import { Timeline } from "@/components/timeline/Timeline";
import { NotebookViewer } from "@/components/projects/NotebookViewer";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/data/profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${profile.name} - ${profile.title}`,
  description: profile.bio,
  keywords: ["Data Scientist", "AI Engineer", "Portfolio", "Machine Learning", "Pharma"],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      <main className="flex flex-col">
        {/* Hero Section */}
        <HeroSection />

        {/* Live Metrics Grid */}
        <section className="container px-4 md:px-6 py-12 -mt-20 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[400px] md:h-[300px]">
            <div className="md:col-span-1 h-full">
              <GitHubStats />
            </div>
            <div className="md:col-span-2 h-full">
              <SkillHeatmap />
            </div>
          </div>
        </section>

        {/* Projects Bento Grid */}
        <ProjectBentoGrid />

        {/* Notebook Viewer */}
        <NotebookViewer />

        {/* Experience Timeline */}
        <Timeline />
      </main>

      <Footer />
    </div>
  );
}
