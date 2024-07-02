'use client'

import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import { ListStatesProvider } from "./contexts/list-states.context"
import { APIProvider } from "@vis.gl/react-google-maps"

type ProvidersProps = {
    children: React.ReactNode
}

export const Providers = ({ children} : ProvidersProps) => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    return (
        <ChakraProvider>
            <APIProvider apiKey={apiKey ?? ''}>
                <ListStatesProvider>
                    { children }
                </ListStatesProvider>
            </APIProvider>
        </ChakraProvider>)
}