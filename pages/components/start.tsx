import React from "react";
import { Button, Input, Spacer, Stack } from "@chakra-ui/react";

type Props = {};

const Start = (props: Props) => {
  return (
    <div>
      <h1 style={{ fontSize: "32em" }}>Enter your name</h1>
      <Stack>
        <Input size="lg" placeholder="john doe" />
        <Spacer />
        <Button size="lg" colorScheme="purple">
          Enter
        </Button>
      </Stack>
    </div>
  );
};

export default Start;
