import { defineStore } from "pinia";
import type { Sticker } from "~/types";
import { stickersMock } from "~/mockData/stickersMock";

export const useStickersStore = defineStore("stickersStore", () => {
  const stickers = ref<Sticker[]>(stickersMock);

  const addSticker = (item: Sticker) => {
    stickers.value.push(item);
  };

  const deleteSticker = (index: number) => {
    stickers.value.splice(index, 1);
  };

  const editSticker = (index: number, item: Sticker) => {
    stickers.value[index] = item;
  };

  return {
    stickers,
    addSticker,
    editSticker,
    deleteSticker,
  };
});
