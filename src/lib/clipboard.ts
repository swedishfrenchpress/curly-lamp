/**
 * The execCommand fallback is deprecated but load-bearing: navigator.clipboard
 * is undefined outside a secure context, which is exactly the case when the
 * mobile share flow is tested over LAN on http://192.168.x.x.
 */
export async function copyText(value: string): Promise<void> {
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
