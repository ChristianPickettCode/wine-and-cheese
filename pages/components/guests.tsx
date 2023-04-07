import { List, ListItem, Stack } from "@chakra-ui/react";
import React from "react";
import Pie from "./pie";
import { useStore } from "../../lib/store/store";
import { nanoid } from "nanoid";

type Props = {};

const Guests = (props: Props) => {
  const guests = useStore((state) => state.guests);
  return (
    <Stack>
      <Pie />
      <p style={{ textAlign: "center" }}>2🍷 : 1🧀</p>
      <h1 style={{ textAlign: "center", fontSize: "2em" }}>See you soon 😇</h1>

      <List spacing={3} style={{ textAlign: "center" }}>
        {guests.map((guest, _) => (
          <ListItem key={nanoid()}>
            {guest.name} - {guest.wine ? "🍷" : ""} {guest.cheese ? "🧀" : ""}
            {guest.suggestion ? " - " + guest.suggestion : ""}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default Guests;
