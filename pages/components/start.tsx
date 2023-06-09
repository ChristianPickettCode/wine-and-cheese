import React, { useState } from "react";
import { Button, Input, Spacer, Stack } from "@chakra-ui/react";
import { useStore } from "../../lib/store/store";

type Props = {};

const Start = (props: Props) => {
  const saveName = useStore((state) => state.setName);
  const [name, setName] = useState("");

  const localSaveName = () => {
    if (name != "") {
      saveName(name);
    }
  };
  return (
    <div>
      <h1 style={{ fontSize: "6em" }}>Enter your name(s)</h1>
      <Stack>
        <Input
          size="lg"
          placeholder="..."
          onChange={(e) => setName(e.target.value)}
        />
        <Spacer />
        <Button size="lg" colorScheme="purple" onClick={localSaveName}>
          Enter
        </Button>
      </Stack>
    </div>
  );
};

export default Start;
