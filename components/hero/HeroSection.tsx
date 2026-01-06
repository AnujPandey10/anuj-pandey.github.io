
"use client";

import { motion } from "framer-motion";
import { HeroCanvas } from "./HeroCanvas";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <HeroCanvas />

      <div className="z-10 container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground border border-border">
            {profile.title}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground max-w-3xl">
            {profile.name}
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {profile.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4"
        >
          <Button asChild size="lg" className="gap-2">
            <a href="#projects">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
