import { Button } from "@chakra-ui/button";
import { CheckIcon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input, InputRightElement } from "@chakra-ui/input";
import { Table, Thead, Tr, Th, Tbody, Td, Tfoot } from "@chakra-ui/table";
import { setNestedObjectValues } from "formik";
import { useEffect, useState } from "react";

const invoiceHeaders = [
    'Description',
    'Quantity',
    'Price',
    'Subtotal',
    'Tax rate',
]

type InvoiceItem = {
    id: number;
}

const invoiceItemRows: InvoiceItem[] = [
    { id: 1 }
]

const InvoiceItems = () => {
    const [invoiceItemRows, setInvoiceItemRows] = useState<InvoiceItem[]>([]);
    const [currentInvoiceItemId, setCurrentInvoiceItemId] = useState(1);
    const addInvoiceRow = () => {
        setCurrentInvoiceItemId((currentInvoiceItemId) => currentInvoiceItemId + 1)
        setInvoiceItemRows([...invoiceItemRows, { id: currentInvoiceItemId}])
    }

    const setupNewInvoice = useEffect(() => {
        setInvoiceItemRows(invoiceItemRows);
    }, [])
    return (
        <>
            <Table size='sm'>
                <Thead>
                    <Tr>
                        {invoiceHeaders.map(header => (
                            <Th>{header}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {invoiceItemRows.map(invoiceItemRow => (
                        <Tr>
                            <Td>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        fontSize='1.2em'
                                        children='$'
                                    />
                                    <Input placeholder='Enter amount' />
                                </InputGroup>
                            </Td>
                            <Td>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        fontSize='1.2em'
                                        children='$'
                                    />
                                    <Input placeholder='Enter amount' />
                                </InputGroup>
                            </Td>
                            <Td>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        fontSize='1.2em'
                                        children='$'
                                    />
                                    <Input placeholder='Enter amount' />
                                </InputGroup>
                            </Td>
                            <Td>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        fontSize='1.2em'
                                        children='$'
                                    />
                                    <Input placeholder='Enter amount' />
                                </InputGroup>
                            </Td>
                            <Td>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        fontSize='1.2em'
                                        children='$'
                                    />
                                    <Input placeholder='Enter amount' />
                                </InputGroup>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <Button
                mt={4}
                colorScheme='teal'
                onClick={addInvoiceRow}
                type='submit'
            >
                Add row
            </Button>
        </>
    )
}

export default InvoiceItems;
