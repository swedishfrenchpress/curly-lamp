"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  id?: string;
  /** Skip the observer — for content already above the fold. */
  immediate?: boolean;
  delay?: number;
};

/**
 * A single fade-and-rise on first entry, then the observer disconnects and
 * never fires again. Motion here is a reading cue, not an effect: content that
 * re-animates on scroll-up reads as a brochure, and this page is asking to be
 * read as a record. Reduced-motion users get the end state immediately via CSS.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  id,
  immediate = false,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(immediate);

  useEffect(() => {
    if (immediate) return;
    const node = ref.current;
    if (!node) return;

    // No IntersectionObserver must never mean invisible content — fail open.
    // Written straight to the DOM rather than through state: this is an
    // environment capability, not application state, and there is nothing to
    // re-render for.
    if (typeof IntersectionObserver === "undefined") {
      node.dataset.shown = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${className}`.trim()}
      data-shown={shown ? "true" : "false"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
