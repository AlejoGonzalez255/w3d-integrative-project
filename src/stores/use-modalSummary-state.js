import { create } from "zustand";

const useModalSummaryStore = create((set) => ({
    modalSummary: false,
    modalSummaryData: {
        title: "",
        description: "",
        navigation: ""
    },
    setModalSummaryData: (value) => set({ modalSummaryData: value }),
    setModalSummary: (value) => set({ modalSummary: value }),
    }));

export default useModalSummaryStore;