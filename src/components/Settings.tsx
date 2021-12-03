import { SimpleGrid, Box } from "@chakra-ui/layout";

const Settings = () => {
    return (
        <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
            <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>
    )
}

export default Settings;