
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitCommit, Star, GitPullRequest, Code } from "lucide-react";

// Mock data to simulate live stats. In a real app, you'd fetch this from GitHub API.
const stats = [
  {
    title: "Total Commits",
    value: "1,240+",
    icon: GitCommit,
    change: "+12 this week",
  },
  {
    title: "Stars Earned",
    value: "145",
    icon: Star,
    change: "+5 this month",
  },
  {
    title: "PRs Merged",
    value: "68",
    icon: GitPullRequest,
    change: "98% acceptance",
  },
  {
    title: "Repositories",
    value: "24",
    icon: Code,
    change: "Active contributor",
  },
];

export function GitHubStats() {
  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      {stats.map((stat) => (
        <Card key={stat.title} className="bg-card/50 backdrop-blur-sm border-border flex flex-col justify-center">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
