import React from "react";
import Pie from "./pie";
import { Button, Spacer, Stack } from "@chakra-ui/react";
import { useStore } from "../store/store";

type Props = {};

const Ideal = (props: Props) => {
  const acknowledged = useStore((state) => state.acknowledged);
  return (
    <div>
      <Stack align="center">
        <Pie />
        <Spacer />
        <h1 style={{ fontSize: "2em" }}>Ideally we would like a 2:1 ratio</h1>
        <Spacer />
        <Button colorScheme="purple" onClick={acknowledged}>
          What can you bring?
        </Button>
      </Stack>
    </div>
  );
};

export default Ideal;
