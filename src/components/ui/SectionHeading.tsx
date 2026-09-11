interface SectionHeadingProps {
  title: string;
  description?: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-[1.75rem] font-semibold tracking-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-[68ch] text-ink/70">{description}</p>
      ) : null}
    </div>
  );
}
