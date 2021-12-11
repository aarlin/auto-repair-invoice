import { Select, Input, InputGroup, InputLeftAddon, InputRightAddon, Stack } from "@chakra-ui/react";
import { useState } from "react";
import InvoiceItems from "./InvoiceItems";
// import BarcodeReader from 'react-barcode-reader';
import create from 'zustand';

const NewInvoice = () => {
    const handleDateSelect = () => {

    }

    const handleDateChange = () => {

    }

    const handleScan = (data: any) => {
        console.log(data);
    }

    const handleError = (err: any) => {
        console.error(err)
    }
    const [startDate, setStartDate] = useState(new Date());
    const invoicePrepend = 'INV';

    return (
        <>
            <Stack spacing={4}>
                <Select placeholder='Select Client'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <InputGroup>
                    <InputLeftAddon children={invoicePrepend} />
                    <Input type='tel' placeholder='phone number' />
                </InputGroup>
                <InvoiceItems></InvoiceItems>
                <Input placeholder='Basic usage' />
            </Stack>
        </>
    )
}

export default NewInvoice;