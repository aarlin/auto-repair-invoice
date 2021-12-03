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
                <HStack>
                    <StatLabel>Company Name: {props.companyName}</StatLabel>
                </HStack>
                <HStack>
                    <StatLabel>Street: {props.street}</StatLabel>
                </HStack>
                <HStack>
                    <StatLabel>City: {props.city}</StatLabel>
                </HStack>
                <HStack>
                    <StatLabel>State: {props.state}</StatLabel>
                </HStack>
                <HStack>
                    <StatLabel>Zip Code: {props.zip}</StatLabel>
                </HStack>
                <HStack>
                    <StatLabel>Phone Number: {props.phoneNumber}</StatLabel>
                </HStack>
                <HStack>
                    <StatLabel>Fax Number: {props.faxNumber}</StatLabel>
                </HStack>
                <HStack>
                    <StatLabel>Email: {props.email}</StatLabel>
                </HStack>
            </Stack>
        </Stat>
    );
}

export default Stats;