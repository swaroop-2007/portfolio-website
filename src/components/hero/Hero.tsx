import { profile } from "@/content/profile";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { LineageGraph } from "@/components/hero/LineageGraph";
import { ScrollHighlightText } from "@/components/ui/ScrollHighlightText";
import { Portrait } from "@/components/hero/Portrait";

export function Hero() {
  return (
    <header id="hero" className="pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-4">
        <div className="flex items-center gap-4 md:gap-6">
          <Portrait />
          <div>
            <h1 className="text-4xl md:text-[3.5rem] font-bold tracking-tight leading-[1.05]">
              {profile.name}
            </h1>
            <p className="font-mono text-xs uppercase tracking-wider text-ink/65 mt-2">{profile.location}</p>
          </div>
        </div>
        <nav aria-label="Primary links" className="flex flex-wrap gap-x-4 gap-y-1 text-sm shrink-0">
          <ExternalLink href={profile.links.github}>GitHub</ExternalLink>
          <ExternalLink href={profile.links.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={profile.links.resumeHref}>Resume</ExternalLink>
          <ExternalLink href={`mailto:${profile.links.email}`}>Email</ExternalLink>
        </nav>
      </div>

      <ScrollHighlightText
        text={profile.positioningLine}
        className="max-w-[60ch] text-xl md:text-2xl mt-6 font-semibold"
      />
      <p className="max-w-[68ch] text-ink/70 mt-3">{profile.bio}</p>

      <div className="mt-12 md:mt-16">
        <LineageGraph />
      </div>
    </header>
  );
}
