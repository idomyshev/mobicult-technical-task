import type { Sticker } from "~/types";

export const stickersMock: Sticker[] = Array.from(
  { length: 10 },
  (_, i) => i,
).map((index) => {
  return {
    text: `Стикер ${index + 1}`,
  } as Sticker;
});
