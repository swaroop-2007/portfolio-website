import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Reveal } from "@/components/ui/Reveal";
import { ContactPhoto } from "@/components/sections/ContactPhoto";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <SectionHeading title="Contact" />
      <Reveal className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="flex flex-col gap-2 text-lg">
          <ExternalLink href={`mailto:${profile.links.email}`}>
            {profile.links.email}
          </ExternalLink>
          <ExternalLink href={profile.links.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={profile.links.github}>GitHub</ExternalLink>
          <ExternalLink href={profile.links.resumeHref}>Resume (PDF)</ExternalLink>
        </div>
        <ContactPhoto />
      </Reveal>
    </section>
  );
}
