export function TechTag({ label }: { label: string }) {
  return (
    <span className="font-mono text-[0.75rem] leading-none text-ink/70 border border-ink/15 rounded px-2 py-1">
      {label}
    </span>
  );
}
