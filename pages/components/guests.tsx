import { List, ListIcon, ListItem, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import Pie from "./pie";

type Props = {};

const Guests = (props: Props) => {
  const [guests, setGuests] = useState([
    { name: "jane", wine: true, cheese: false },
    { name: "sam", wine: true, cheese: true },
    { name: "crytal", wine: true, cheese: false },
    { name: "mark", wine: false, cheese: true },
  ]);
  return (
    <Stack>
      <Pie />
      <List spacing={3} style={{ textAlign: "center" }}>
        {guests.map((guest, _) => (
          <ListItem>
            {guest.name} - {guest.wine ? "🍷" : ""} {guest.cheese ? "🧀" : ""}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default Guests;
