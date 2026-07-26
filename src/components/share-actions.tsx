"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { copyText } from "@/lib/clipboard";
import type { ShareBlock } from "@/content/types";

type Status = "idle" | "copied" | "error";

/** Never resubscribes; the value only has to differ between server and client. */
const noopSubscribe = () => () => {};

/**
 * One control, one outcome: the short message and the canonical link land on
 * the clipboard together and a toast says so. The only client module in the
 * share system — the asset list and the CTA wrapper stay on the server.
 */
export default function ShareActions({
  block,
  url,
}: {
  block: ShareBlock;
  url: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  // document.body only exists on the client, so the portal has to wait for it.
  // useSyncExternalStore rather than a setState-in-effect flag: it gives the
  // server pass `false` and the client `true` without a cascading render.
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 4000);
    return () => clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    try {
      await copyText(`${block.shareText}\n\n${url}`);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="share-actions">
      <button type="button" className="btn btn--primary" onClick={copy}>
        {block.shareLabel}
      </button>

      {/* Portalled to <body> on purpose. Every mount site sits inside a
          <Reveal>, and a transformed ancestor makes `position: fixed` resolve
          against that ancestor instead of the viewport — the toast would be
          anchored to the section and invisible until it scrolled into view.
          The region is created at mount, long before any interaction, so it is
          a stable live region rather than one inserted with its own text. */}
      {mounted &&
        createPortal(
          <div
            className="share-toast"
            role="status"
            aria-live="polite"
            data-open={status === "idle" ? "false" : "true"}
          >
            <p className="share-toast__text">
              {status === "copied"
                ? block.copiedLabel
                : status === "error"
                  ? block.errorLabel
                  : ""}
            </p>
          </div>,
          document.body,
        )}
    </div>
  );
}
