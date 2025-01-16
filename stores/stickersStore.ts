import { defineStore } from "pinia";
import type { ISticker, IStickerForm } from "~/types";
import { stickersMock } from "~/mockData/stickersMock";
import { v4 as uuidv4 } from "uuid";
import { storageKey } from "~/settings/storage";

export const useStickersStore = defineStore("stickersStore", () => {
  const stickers = ref<ISticker[]>(stickersMock);

  const addSticker = (item: IStickerForm) => {
    stickers.value.push({ id: uuidv4(), ...item });

    updateDatabase();
  };

  const deleteSticker = (item: ISticker) => {
    const index = stickers.value.findIndex((el) => item.id === el.id);
    stickers.value.splice(index, 1);
  };

  const editSticker = (index: number, item: ISticker) => {
    stickers.value[index] = item;
  };

  const updateDatabase = () => {
    localStorage.setItem(storageKey, JSON.stringify(stickers.value));
  };

  return {
    stickers,
    addSticker,
    editSticker,
    deleteSticker,
  };
});
