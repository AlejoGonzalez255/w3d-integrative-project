import { create } from "zustand";

const useQuizStore = create((set) => ({
    quizPoints: 0,
    setQuizPoints: () =>
        set((state) => ({ quizPoints: state.quizPoints + 1 })),
    quizStarted: false,
    setQuizStarted: (started) => set({ quizStarted: started }),
    quizPointReset: () => set({ quizPoints: 0 }),
    quizFinished: false,
    setQuizFinished: (finished) => set({ quizFinished: finished }),
}));

export default useQuizStore;
