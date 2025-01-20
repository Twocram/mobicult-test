import { defineStore } from "pinia";
import type { Card } from "~/types/card";

const broadcastChannel = new BroadcastChannel("cards_channel");

export const useCardStore = defineStore("card", () => {
  const cards = ref<Card[]>([]);

  function addCard(card: Card) {
    cards.value.push(card);
  }

  function editCard(id: number, title: string) {
    const card = cards.value.find((c) => c.id === id);

    if (card) {
      card.title = title;
    }
  }

  function loadCards() {
    if (import.meta.client) {
      const savedCards = localStorage.getItem("cards") as string;
      if (savedCards) {
        cards.value = JSON.parse(savedCards) as Card[];
      }
    }
  }

  function saveCards() {
    if (import.meta.client) {
      const toast = useToast();

      const isAllCardsFilled = cards.value.every((card) => card.title.trim() !== "");

      if (!isAllCardsFilled) {
        toast.error("Заполните все карточки!", {
          position: "bottom-right"
        })

        return
      }

      localStorage.setItem("cards", JSON.stringify(cards.value.map((card) => ({ ...card, title: card.title.trim() }))));
      broadcastChannel.postMessage({ action: "save" });

      toast.success("Данные сохранены!", {
        position: "bottom-right",
      });
    }
  }

  function deleteCard(cardId: number) {
    cards.value = cards.value.filter((card) => card.id !== cardId);
  }

  return {
    cards,
    addCard,
    editCard,
    loadCards,
    saveCards,
    deleteCard,
  };
});

broadcastChannel.onmessage = (e: MessageEvent) => {
  if (e.data.action === "save") {
    useCardStore().loadCards();
  }
};
