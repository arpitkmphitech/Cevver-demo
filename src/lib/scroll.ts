export function scrollToSectionId(
  id: string,
  opts?: {
    behavior?: ScrollBehavior;
    block?: ScrollLogicalPosition;
    clearHash?: boolean;
  }
) {
  if (typeof window === "undefined") return;
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  if (opts?.clearHash) {
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`
    );
  }

  el.scrollIntoView({
    behavior: opts?.behavior ?? "smooth",
    block: opts?.block ?? "start",
  });
}
