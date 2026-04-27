import crown from "@/assets/crown.png";

export function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-4 py-12">
      <img src={crown} alt="" width={48} height={48} className="h-10 w-10 md:h-12 md:w-12 opacity-90 animate-flicker" />
      {label && (
        <p className="font-display text-sm md:text-base uppercase tracking-[0.4em] text-blood">
          {label}
        </p>
      )}
    </div>
  );
}