
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { profile } from "@/data/profile";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-6">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              {profile.name.split(" ")[0]}<span className="text-primary">.io</span>
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Projects
            </Link>
            <Link href="#experience" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Experience
            </Link>
            {/* <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
              About
            </Link> */}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button asChild variant="outline" size="sm">
            <Link href={profile.socials.linkedin} target="_blank">Contact Me</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
