export const AOS_CARD_CYCLE = [
  "fade-up",
  "zoom-in",
  "flip-up",
  "fade-left",
  "fade-right",
] as const;

export function aosCardAnimation(index: number) {
  return AOS_CARD_CYCLE[index % AOS_CARD_CYCLE.length];
}
