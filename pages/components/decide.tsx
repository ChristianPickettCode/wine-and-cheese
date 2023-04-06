import React from "react";
import Pie from "./pie";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  SimpleGrid,
  Spacer,
  Stack,
  VStack,
} from "@chakra-ui/react";

type Props = {};

function Decide({}: Props) {
  return (
    <div>
      <Pie />
      <VStack>
        <Flex width="50%">
          <h1 style={{ fontSize: "2em" }}>🍷</h1>
          <Spacer />
          <Checkbox size="lg" colorScheme="orange" checked={false} />
        </Flex>

        <Spacer />
        <Flex width="50%">
          <h1 style={{ fontSize: "2em" }}>🧀</h1>
          <Spacer />
          <Checkbox size="lg" colorScheme="orange" checked={false} />
        </Flex>

        <Spacer />
        <Flex width="100%">
          <h3 style={{ paddingTop: "6px" }}>I have another idea</h3>
          <Spacer />
          <Input width="50%" />
        </Flex>

        <Spacer />
        <Button colorScheme="purple" width="100%">
          RSVP
        </Button>
      </VStack>
    </div>
  );
}

export default Decide;
