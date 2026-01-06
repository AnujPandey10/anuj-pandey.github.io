
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, projects } from "@/data/projects";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Filter } from "lucide-react";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function ProjectBentoGrid() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 container px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
          <p className="text-muted-foreground mt-2">
            Showcasing work in Process Optimization, NLP, and Predictive Modeling.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
           {categories.map((cat) => (
             <Button
               key={cat}
               variant={filter === cat ? "default" : "outline"}
               size="sm"
               onClick={() => setFilter(cat)}
               className="capitalize"
             >
               {cat}
             </Button>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={project.featured ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full flex flex-col overflow-hidden bg-card/50 hover:bg-card/80 transition-colors border-border group">
      <CardHeader>
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="mb-2 text-primary border-primary/20">
            {project.category}
          </Badge>
          <div className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
            {project.insight}
          </div>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{project.techStack.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="gap-2 pt-0 mt-auto">
        <Button variant="outline" size="sm" className="w-full" disabled={!project.repoUrl}>
          <Github className="mr-2 h-3 w-3" /> Code
        </Button>
        <Button size="sm" className="w-full" disabled={!project.demoUrl}>
          <ExternalLink className="mr-2 h-3 w-3" /> Demo
        </Button>
      </CardFooter>
    </Card>
  );
}
