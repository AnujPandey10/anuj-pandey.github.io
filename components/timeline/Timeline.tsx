
"use client";

import { motion } from "framer-motion";
import { Experience, experiences } from "@/data/experience";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Timeline() {
  const workExperiences = experiences.filter((e) => e.type === "work");
  const education = experiences.filter((e) => e.type === "education");

  return (
    <section id="experience" className="py-20 container px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <TimelineColumn title="Professional Experience" items={workExperiences} />
        <TimelineColumn title="Education" items={education} />
      </div>
    </section>
  );
}

function TimelineColumn({ title, items }: { title: string; items: Experience[] }) {
  return (
    <div className="space-y-8 relative">
      <h3 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-primary/50">
        {title}
      </h3>

      {/* Neural Network Spine Line */}
      <div className="absolute left-[19px] top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent z-0" />

      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative pl-10 group"
        >
          {/* Node */}
          <div className="absolute left-[11px] top-6 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 group-hover:bg-primary group-hover:scale-125 transition-all" />

          <Card className="bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{item.role}</CardTitle>
                  <div className="text-primary font-medium">{item.company}</div>
                </div>
                <div className="text-sm text-muted-foreground text-right">
                  <div>{item.period}</div>
                  <div>{item.location}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {item.description}
              </p>
              <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-muted-foreground mb-4">
                {item.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
