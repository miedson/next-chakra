'use client'
import { createContext, useState } from "react";
import { State, states } from '../states';

type propsListStatesContext = {
    stateSelected: State;
    setStateSelected: (state: State) => void;
};
export const ListStatesContext = createContext<propsListStatesContext>({} as propsListStatesContext);

export function ListStatesProvider({ children }: { children: React.ReactNode }) {
    const [stateSelected, setStateSelected] = useState<State>(states[0]);
    return (
        <ListStatesContext.Provider value={{stateSelected, setStateSelected}}>
            {children}
        </ListStatesContext.Provider>
    )
}