import { Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot } from "@chakra-ui/table";
import customers from '../data/customers';


const Clients = () => {
    return (
        <Table variant='striped' colorScheme='teal'>
            <TableCaption>
                
            </TableCaption>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Address</Th>
                    <Th>City</Th>
                    <Th>State</Th>
                    <Th>Zip Code</Th>
                    <Th>Phone Number</Th>
                    <Th>Email</Th>
                    <Th>Notes</Th>
                    <Th>Labels</Th>
                </Tr>
            </Thead>
            <Tbody>
                {customers.map(customer => (
                    <Tr>
                    {Object.values(customer).map(value => (
                        <Td>{value}</Td>
                    ))}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
}

export default Clients;