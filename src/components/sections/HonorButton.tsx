import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HonorButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  size?: "default" | "lg";
}

export function HonorButton({ children, href = "#checkout", className, size = "default" }: HonorButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 rounded-md font-display uppercase tracking-wider text-primary-foreground",
        "bg-gradient-blood shadow-blood animate-pulse-blood transition-all duration-300",
        "hover:scale-[1.02] hover:brightness-110 active:scale-[0.99]",
        "border border-white/10",
        size === "lg" ? "px-10 py-5 text-xl md:text-2xl" : "px-8 py-4 text-base md:text-lg",
        className,
      )}
    >
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      <span className="font-bold">{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-md bg-gradient-to-b from-white/20 to-transparent opacity-50" />
    </a>
  );
}