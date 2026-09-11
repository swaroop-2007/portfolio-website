import type { AnchorHTMLAttributes } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function ExternalLink({ href, children, className = "", ...rest }: ExternalLinkProps) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`underline decoration-ink/30 underline-offset-4 hover:decoration-ink transition-colors ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
