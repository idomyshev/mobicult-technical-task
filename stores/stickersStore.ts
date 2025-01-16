import { defineStore } from "pinia";
import type { ISticker } from "~/types";
import { stickersMock } from "~/mockData/stickersMock";

export const useStickersStore = defineStore("stickersStore", () => {
  const stickers = ref<ISticker[]>(stickersMock);

  const addSticker = (item: ISticker) => {
    stickers.value.push(item);
  };

  const deleteSticker = (index: number) => {
    stickers.value.splice(index, 1);
  };

  const editSticker = (index: number, item: ISticker) => {
    stickers.value[index] = item;
  };

  return {
    stickers,
    addSticker,
    editSticker,
    deleteSticker,
  };
});
