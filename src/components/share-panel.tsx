"use client";

import { useState } from "react";
import CampaignImageSlot, {
  type CampaignImageKind,
} from "@/components/campaign-image-slot";
import type { ShareBlock } from "@/content/types";
import { path, type Lang } from "@/content/types";

const SHARE_SLOT_KINDS: CampaignImageKind[] = [
  "share-landscape",
  "share-square",
];

async function copyText(value: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("copy failed");
}

export default function SharePanel({
  block,
  lang,
  siteName,
}: {
  block: ShareBlock;
  lang: Lang;
  siteName: string;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const currentUrl = () =>
    new URL(path(lang, "home"), window.location.origin).toString();

  const copy = async () => {
    try {
      await copyText(currentUrl());
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  };

  const share = async () => {
    if (!navigator.share) {
      await copy();
      return;
    }

    try {
      await navigator.share({
        title: siteName,
        text: block.shareText,
        url: currentUrl(),
      });
      setStatus("idle");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setStatus("error");
    }
  };

  return (
    <div className="share-panel">
      <div className="share-panel__actions">
        <button type="button" className="btn btn--primary" onClick={share}>
          {block.shareLabel}
        </button>
        <button type="button" className="btn btn--ghost" onClick={copy}>
          {block.copyLabel}
        </button>
      </div>

      <p className="share-panel__status" aria-live="polite">
        {status === "copied"
          ? block.copiedLabel
          : status === "error"
            ? block.errorLabel
            : "\u00a0"}
      </p>

      <div className="share-panel__downloads">
        <p className="share-panel__download-title">{block.downloadLabel}</p>
        <ul>
          {block.assets.map((asset, index) => (
            <li key={asset.href}>
              <CampaignImageSlot
                kind={SHARE_SLOT_KINDS[index] ?? "share-square"}
                lang={lang}
                className="share-panel__asset-preview"
              />
              <a href={asset.href} download>
                <span>{asset.label}</span>
                <span>{asset.meta}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
