import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/gfbs3-portfolio-demo" : "";

export default function Home() {
  return (
    <main>
      <h1>Luke Jellison makes things for the internet in Yellow Springs, Ohio. </h1>
      <p>
          He plays in a band{" "}
        <a
          href="http://rivercityroustabout.com/"
          title="River City Roustabout website"
        >
          River City Roustabout
        </a>
        .
      </p>
    </main>
  );
}

export const metadata = {
  title: "Luke Jellison",
  description:
    "Luke Jellison makes things for the internet in Yellow Springs, Ohio.",
};

function ProjectCard({ title, description, tags, color, href }: { title: string, description: string, tags: string[], color: "cyan" | "fuchsia" | "purple" | "yellow", href: string }) {
  // Valid color options for the card styling
  const validColors = ["cyan", "fuchsia", "purple", "yellow"] as const;
  
  // Runtime validation: default to "cyan" if an invalid color is provided
  const safeColor = validColors.includes(color) ? color : "cyan";

  const colorClasses = {
    cyan: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    fuchsia: "group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]",
    purple: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    yellow: "group-hover:border-yellow-500/50 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
  };

  const textColors = {
    cyan: "group-hover:text-cyan-400",
    fuchsia: "group-hover:text-fuchsia-400",
    purple: "group-hover:text-purple-400",
    yellow: "group-hover:text-yellow-400",
  };

  return (
    <Link href={href} className={`group block space-y-4 p-6 bg-[#0a0a1a] border border-cyan-900/30 transition-all duration-300 ${colorClasses[safeColor]}`}>
      <div className="flex justify-between items-start">
        <h3 className={`text-xl font-bold text-white tracking-wider transition-colors ${textColors[safeColor]}`}>
          {title}
        </h3>
        <ArrowUpRightIcon className={`w-5 h-5 text-cyan-700 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${textColors[safeColor]}`} />
      </div>
      <p className="text-sm text-cyan-100/60 leading-relaxed font-light border-l border-cyan-900/50 pl-4">
        {description}
      </p>
      <div className="flex gap-2 pt-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-cyan-700 bg-cyan-950/30 px-2 py-1 border border-cyan-900/30 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function SocialLink({ href, label }: { href: string, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-xs font-bold tracking-widest text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all"
    >
      {label}
    </a>
  );
}

// Simple Icons
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
