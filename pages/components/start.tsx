import React, { useState } from "react";
import { Button, Input, Spacer, Stack } from "@chakra-ui/react";
import { useStore } from "../store/store";

type Props = {};

const Start = (props: Props) => {
  const saveName = useStore((state) => state.setName);
  const [name, setName] = useState("");
  return (
    <div>
      <h1 style={{ fontSize: "8em" }}>Enter your name</h1>
      <Stack>
        <Input
          size="lg"
          placeholder="..."
          onChange={(e) => setName(e.target.value)}
        />
        <Spacer />
        <Button size="lg" colorScheme="purple" onClick={() => saveName(name)}>
          Enter
        </Button>
      </Stack>
    </div>
  );
};

export default Start;
