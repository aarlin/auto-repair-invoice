import {
    HStack,
    Stack,
    Stat,
    StatHelpText,
    StatLabel
} from "@chakra-ui/react";
import React from "react";

const Stats = (props: any) => {
    return (
        <Stat mt={5}>
            <Stack
                p={4}
                borderWidth="3px"
                borderRadius="md"
                direction="column"
                align="flex-start"
            >
                {
                    Object.keys(props).map(key => (
                        <HStack>
                            <StatLabel>{key}: {props[key]}</StatLabel>
                        </HStack>
                    ))
                }
            </Stack>
        </Stat>
    );
}

export default Stats;