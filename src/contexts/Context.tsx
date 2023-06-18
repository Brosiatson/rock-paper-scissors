import { createContext, useContext } from "react";
import { contextValuesType } from "../types/types";

export const Context = createContext<contextValuesType | null>(null)

export const useContextIsNull = () => {
    const context = useContext(Context)

    if(!context) {
        throw new Error("Context is null")
    }

    return context
}