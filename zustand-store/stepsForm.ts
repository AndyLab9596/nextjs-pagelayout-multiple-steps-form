import { create } from "zustand";

interface IStepsForm {
    currentStep: number;
    nextStep: () => void;
}

const useStepsForm = create<IStepsForm>((set) => ({
    currentStep: 0,
    nextStep: () => set((state) => ({currentStep: state.currentStep + 1})),
}))

export {
    useStepsForm
}