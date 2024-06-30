'use client'
import { useContext } from 'react';
import { ListStates } from './components/ListStates';
import { ListStatesContext } from './contexts/list-states.context';
import { Text } from "@chakra-ui/react"

export default function Home() {
  const { stateSelected } = useContext(ListStatesContext)
  return (
    <>
      <ListStates />
      <Text
        fontWeight={'bold'}
        color={'blue'}
        align={'center'}>{stateSelected.name}</Text>
    </>
  )
}
