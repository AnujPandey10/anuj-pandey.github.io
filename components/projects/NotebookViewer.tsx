
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const notebooks = [
  {
    title: "Predictive Maintenance for Bioreactors",
    problem: "Unscheduled downtime in bioreactors costs $50k/hr.",
    insight: "Vibration patterns change 4 hours before failure.",
    model: "LSTM Autoencoder for Anomaly Detection.",
    tags: ["Time Series", "Deep Learning"],
  },
  {
    title: "Molecular Docking Simulation",
    problem: "Screening 1M compounds takes weeks.",
    insight: "Geometric deep learning can filter 99% of non-binders.",
    model: "Graph Neural Network (GNN).",
    tags: ["Computational Biology", "GNN"],
  },
];

export function NotebookViewer() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-10">
          Interactive Notebooks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notebooks.map((nb, i) => (
            <Card key={i} className="bg-card border-border overflow-hidden">
              <div className="bg-muted px-4 py-2 border-b border-border flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs font-mono text-muted-foreground">notebook_{i + 1}.ipynb</span>
              </div>
              <CardContent className="p-6 space-y-4 font-mono text-sm">
                <div>
                  <span className="text-primary"># The Problem</span>
                  <p className="text-muted-foreground mt-1">{nb.problem}</p>
                </div>
                <div>
                  <span className="text-blue-500"># The Insight</span>
                  <p className="text-muted-foreground mt-1">{nb.insight}</p>
                </div>
                <div>
                  <span className="text-purple-500"># The Model</span>
                  <p className="text-muted-foreground mt-1">{nb.model}</p>
                </div>
                <div className="flex gap-2 pt-2">
                  {nb.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
