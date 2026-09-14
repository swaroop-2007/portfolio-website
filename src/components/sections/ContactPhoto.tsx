import Image from "next/image";

export function ContactPhoto() {
  return (
    <div className="relative w-36 h-48 md:w-44 md:h-[15.5rem] shrink-0">
      <div className="relative w-full h-full overflow-hidden border border-ink/15">
        <Image
          src="/swaroop.jpg"
          alt="Swaroop Udgaonkar"
          fill
          sizes="176px"
          className="object-cover"
        />
      </div>
      <span aria-hidden className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-served" />
      <span aria-hidden className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-served" />
      <span aria-hidden className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-served" />
      <span aria-hidden className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-served" />
    </div>
  );
}
