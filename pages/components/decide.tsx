import React, { useState } from "react";
import Pie from "./pie";
import {
  Button,
  Checkbox,
  Flex,
  Input,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { useStore } from "../store/store";
import { supabase } from "../api/api";

type Props = {};

function Decide({}: Props) {
  const [wine, setWine] = useState(false);
  const [cheese, setCheese] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const updateGuest = useStore((state) => state.updateGuest);
  const thisGuest = useStore((state) => state.thisGuest);

  const insertData = async () => {
    const { data, error } = await supabase.from("guests").insert([
      {
        name: thisGuest?.name,
        cheese: cheese,
        wine: wine,
        suggestion: suggestion,
      },
    ]);

    if (error != null) {
      console.error("ERROR inserting guest to DB", error);
      return null;
    }
    return data;
  };

  const SaveToDB = () => {
    let data = insertData();
    if (data != null) {
      updateGuest(wine, cheese, suggestion);
    }
  };
  return (
    <div>
      <Pie />
      <VStack>
        <Flex width="50%">
          <h1 style={{ fontSize: "2em" }}>🍷</h1>
          <Spacer />
          <Checkbox
            size="lg"
            colorScheme="orange"
            checked={wine}
            onChange={() => setWine(!wine)}
          />
        </Flex>

        <Spacer />
        <Flex width="50%">
          <h1 style={{ fontSize: "2em" }}>🧀</h1>
          <Spacer />
          <Checkbox
            size="lg"
            colorScheme="orange"
            checked={cheese}
            onChange={() => setCheese(!cheese)}
          />
        </Flex>

        <Spacer />
        <Flex width="100%">
          <h3 style={{ paddingTop: "6px" }}>I have another idea</h3>
          <Spacer />
          <Input width="50%" onChange={(e) => setSuggestion(e.target.value)} />
        </Flex>

        <Spacer />
        <Button colorScheme="purple" width="100%" onClick={SaveToDB}>
          RSVP
        </Button>
      </VStack>
    </div>
  );
}

export default Decide;
