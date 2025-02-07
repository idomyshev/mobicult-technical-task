import { defineStore } from "pinia";
import type { ISticker, IStickerForm } from "~/types";
import { v4 as uuidv4 } from "uuid";
import { storageKey } from "~/settings/storage";


export const useStickersStore = defineStore("stickersStore", () => {
  const stickers = ref<ISticker[]>([]);
  const isDataLoading = ref<boolean>(true);

  const addSticker = (item: IStickerForm) => {
    stickers.value.push({ id: uuidv4(), ...item });
    updateDatabase();
  };

  const deleteSticker = (item: ISticker) => {
    const index = stickers.value.findIndex((el) => item.id === el.id);
    stickers.value.splice(index, 1);
    updateDatabase();
  };

  const editSticker = (item: ISticker) => {
    const { id, ...form } = item;
    const foundItem = stickers.value.find((el) => el.id === id);

    if (foundItem) {
      Object.assign(foundItem, form);
    }

    updateDatabase();
  };

  const updateDatabase = () => {
    localStorage.setItem(storageKey, JSON.stringify(stickers.value));
  };

  const loadDatabase = () => {
    const json = localStorage.getItem(storageKey);

    if (json) {
      const parsedJson = JSON.parse(json);

      if (parsedJson && parsedJson.length) {
        stickers.value = parsedJson;
      }
    }

    isDataLoading.value = false;
  };

  return {
    stickers,
    isDataLoading,
    addSticker,
    editSticker,
    deleteSticker,
    loadDatabase,
  };
});
