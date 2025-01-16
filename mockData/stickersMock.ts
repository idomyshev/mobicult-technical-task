import type { ISticker } from "~/types";

export const stickersMock: ISticker[] = Array.from(
  { length: 10 },
  (_, i) => i,
).map((index) => {
  return {
    text: `Стикер ${index + 1}`,
  } as ISticker;
});
