'use client'

import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import { ListStatesProvider } from "./contexts/list-states.context"

type ProvidersProps = {
    children: React.ReactNode
}

export const Providers = ({ children} : ProvidersProps) => {
    return (
        <ChakraProvider>
            <ListStatesProvider>{ children }</ListStatesProvider>
        </ChakraProvider>)
}