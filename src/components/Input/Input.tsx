import { CalendarIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  Input as InputComponent,
  InputRightElement
} from "@chakra-ui/react";
import { ReactNode } from "react";

export interface InputProps {
  icon: ReactNode;
}

export const Input = (props: InputProps) => {
  const { icon = <CalendarIcon fontSize="sm" /> } = props;

  return (
    <InputGroup>
      <InputComponent background="white" />
      <InputRightElement color="gray.500" children={icon} />
    </InputGroup>
  );
};
