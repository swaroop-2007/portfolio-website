import Image from "next/image";

export function ContactPhoto() {
  return (
    <div className="w-40 md:w-48 shrink-0">
      <div className="relative w-40 h-52 md:w-48 md:h-60">
        <div className="relative w-full h-full overflow-hidden border border-ink/15">
          <Image
            src="/swaroop.jpg"
            alt="Swaroop Udgaonkar"
            fill
            sizes="192px"
            className="object-cover grayscale contrast-125 brightness-75"
          />
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-color bg-gradient-to-br from-source to-transform opacity-80"
          />
        </div>
        <span aria-hidden className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-served" />
        <span aria-hidden className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-served" />
        <span aria-hidden className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-served" />
        <span aria-hidden className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-served" />
      </div>
      <div className="flex items-center justify-between mt-3 font-mono text-[0.6875rem] uppercase tracking-wider text-ink/65">
        <span>Available for work</span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden className="size-1.5 rounded-full bg-served" />
          Online
        </span>
      </div>
    </div>
  );
}
