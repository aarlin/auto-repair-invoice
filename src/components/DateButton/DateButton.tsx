import { Button, ButtonProps } from "@chakra-ui/react";

export interface DateButtonProps extends ButtonProps {}

export const DateButton = (props: DateButtonProps) => {
  return (
    <Button
      variant="ghost"
      color="gray.500"
      justifyContent="flex-start"
      width="100%"
      minWidth="40"
      {...props}
    />
  );
};
