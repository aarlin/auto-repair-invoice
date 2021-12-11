import { Select, Input, InputGroup, InputLeftAddon, InputRightAddon, Stack, Button } from "@chakra-ui/react";
import { useState } from "react";
// import BarcodeReader from 'react-barcode-reader';

const NewClient = () => {
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
    const submitForm = () => {
        alert('submit new client')
    }
    const [startDate, setStartDate] = useState(new Date());
    const invoicePrepend = 'INV';

    return (
        <>
            <Stack spacing={4}>
                <InputGroup>
                    <InputLeftAddon children={invoicePrepend} />
                    <Input type='tel' placeholder='phone number' />
                </InputGroup>
                <Input placeholder='Name' />
                <Input placeholder='Address' />
                <Input placeholder='City' />
                <Input placeholder='State' />
                <Input placeholder='Zip Code' />
                <Input placeholder='Phone Number' />
                <Input placeholder='Email' />
                <Input placeholder='Notes' />
                <Input placeholder='Labels' />
            </Stack>
            <Button
                mt={4}
                colorScheme='teal'
                onClick={submitForm}
                type='submit'
            >
                Add Client
            </Button>
        </>
    )
}

export default NewClient;