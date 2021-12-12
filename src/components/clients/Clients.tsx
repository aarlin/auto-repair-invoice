import { Button } from "@chakra-ui/button";
import { Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot } from "@chakra-ui/table";
import { useNavigate } from "react-router-dom";
import customers from '../../data/customers';
import NewClient from "./NewClient";


const Clients = () => {
    let navigate = useNavigate();

    const addClient = () => {
        navigate('/clients/new', { replace: true} );
    }
    return (
        <>
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
            <NewClient/>
        </>
    )
}

export default Clients;