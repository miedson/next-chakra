'use client'
import { ListStatesContext } from "@/app/contexts/list-states.context";
import { State, states } from "@/app/states";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { HStack, IconButton, List, ListItem } from "@chakra-ui/react";
import { useRef, useEffect, useContext } from "react";

export const ListStates = () => {
  const { stateSelected, setStateSelected } = useContext(ListStatesContext)
  const listRef = useRef<HTMLUListElement>(null);
  const FIRST_STATE = states[0].acronym;
  const findIndexState = (uf: string) => {
    return states.findIndex((state) => state.acronym === uf);
  };
  const prevUf = () => {
    const stateIndex = findIndexState(stateSelected.acronym);
    const prevState = stateIndex - 1;
    if (prevState >= 0) setStateSelected(states[prevState]);
  };
  const nextUf = () => {
    const stateIndex = findIndexState(stateSelected.acronym);
    const nextState = stateIndex + 1;
    if (nextState < states.length) setStateSelected(states[nextState]);
  };
  const isUfSelected = (uf: string) => stateSelected.acronym === uf;
  useEffect(() => {
    const listItem = listRef.current?.querySelector(
      `li[data-uf='${stateSelected.acronym}']`
    );
    listItem?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [stateSelected]);
  return (
    <HStack justifyContent={"space-between"} gap={{base: '0.5rem', md: '0.8rem', lg: '1.5rem'}} padding={"0.5rem"}>
      <IconButton
        aria-label="prev-uf"
        icon={<ChevronLeftIcon />}
        variant={"outline"}
        colorScheme="blue"
        onClick={prevUf}
      />
      <List
        ref={listRef}
        width={"100%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={{ base: "0", md: "space-between" }}
        gap={{ base: "1rem" }}
        overflow={"hidden"}
      >
        {states.map((state: State) => (
          <ListItem
            key={state.acronym}
            data-uf={state.acronym}
            cursor={"pointer"}
            borderBottom={
              isUfSelected(state.acronym) ? "2px solid blue" : "none"
            }
            color={isUfSelected(state.acronym) ? "blue" : "none"}
            fontWeight={isUfSelected(state.acronym) ? "700" : "normal"}
            onClick={(e) => {
              const stateIndex = findIndexState(
                e.currentTarget.textContent || FIRST_STATE
              );
              setStateSelected(states[stateIndex]);
            }}
          >
            {state.acronym}
          </ListItem>
        ))}
      </List>
      <IconButton
        aria-label="next-uf"
        icon={<ChevronRightIcon />}
        variant={"outline"}
        colorScheme="blue"
        onClick={nextUf}
      />
    </HStack>
  );
};
