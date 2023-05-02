import { create } from "zustand";

interface IFormInfo {
    firstName: string;
    lastName: string;
    finishStep1: (step1Input: {firstName: string, lastName: string}) => void;
    finishStep2: (step1Input: {company: string, occupation: string}) => void;
}

const useFormInfo = create<IFormInfo>((set, get) => ({
    firstName: "",
    lastName: "",
    company: "",
    occupation: "",

    finishStep1: (step1Input) => set((_state) => ({firstName: step1Input.firstName, lastName: step1Input.lastName})),
    finishStep2: (step1Input) => set((_state) => ({firstName: step1Input.company, lastName: step1Input.occupation})),
    getStep1: () => {
        return {
            firstName: get().firstName,
            lastName: get().lastName
        }
    }
}))

export {
    useFormInfo
}