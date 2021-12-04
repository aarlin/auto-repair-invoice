import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Input } from "../Input";
import { InputLabel } from "../InputLabel";
import { DateButton } from "../DateButton";

export interface DatepickerProps {
  position?: "relative" | "absolute";
  startDateIcon?: ReactNode;
  endDateIcon?: ReactNode;
}

export const Datepicker = (props: DatepickerProps) => {
  const { position = "relative", startDateIcon, endDateIcon } = props;

  return (
    <Box position="relative">
      <HStack>
        <VStack alignItems="flex-start">
          <InputLabel>Start date</InputLabel>
          <Input icon={startDateIcon} />
        </VStack>
        <VStack alignItems="flex-start">
          <InputLabel>End date</InputLabel>
          <Input icon={endDateIcon} />
        </VStack>
      </HStack>
      <Box position={position} pt="1.5">
        <Box
          minW="500px"
          minH="200px"
          bg="white"
          borderRadius="base"
          boxShadow="base"
          d="flex"
          p="4"
        >
          <HStack>
            <VStack borderRightWidth="thin" pr="2">
              <DateButton>Today</DateButton>
              <DateButton>Yesterday</DateButton>
              <DateButton>This week</DateButton>
              <DateButton>Last week</DateButton>
              <DateButton>This month</DateButton>
              <DateButton>Last month</DateButton>
            </VStack>
          </HStack>
          <HStack w="100%">
            <VStack></VStack>
            <Box d="flex" justifyContent="flex-end" w="100%">
              <Button>Clear</Button>
              <Button colorScheme="teal" ml="2">
                Done
              </Button>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};
