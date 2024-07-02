'use client'
import { useContext } from 'react';
import { ListStates } from './components/ListStates';
import { ListStatesContext } from './contexts/list-states.context';
import { Text } from "@chakra-ui/react"
import {Map, Marker} from '@vis.gl/react-google-maps';

export default function Home() {
  const { stateSelected } = useContext(ListStatesContext)
  return (
    <>
      <ListStates />
      <Text
        fontWeight={'bold'}
        color={'blue'}
        align={'center'}>{stateSelected.name}</Text>
      <Map
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{lat: 22.54992, lng: 0}}
        center={{lat: stateSelected.latitude, lng: stateSelected.longitude}}
        defaultZoom={5}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        />
        <Marker
          position={{lat: stateSelected.latitude, lng: stateSelected.longitude}}
          clickable={true}
          onClick={() => alert('marker was clicked!')}
          title={stateSelected.name}
        />
    </>
  )
}
