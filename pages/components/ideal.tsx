import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import Pie from "./pie";
import { Button, Spacer, Stack } from "@chakra-ui/react";

type Props = {};

const Ideal = (props: Props) => {
  return (
    <div>
      <Stack align="center">
        <Pie />
        <Spacer />
        <h1 style={{ fontSize: "2em" }}>Ideally we would like a 2:1 ratio</h1>
        <Spacer />
        <Button colorScheme="purple">What can you bring?</Button>
      </Stack>
    </div>
  );
};

export default Ideal;
