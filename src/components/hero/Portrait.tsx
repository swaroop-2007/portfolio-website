import Image from "next/image";

export function Portrait() {
  return (
    <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 border border-ink/20 overflow-hidden">
      <Image
        src="/swaroop.jpg"
        alt="Swaroop Udgaonkar"
        fill
        priority
        sizes="112px"
        className="object-cover grayscale contrast-125 brightness-75"
      />
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-color bg-gradient-to-br from-source to-transform opacity-80"
      />
      <span aria-hidden className="absolute top-1 right-1 size-1.5 rounded-full bg-served" />
    </div>
  );
}
