import { Select, Input } from "@chakra-ui/react";
import { useState } from "react";
import BarcodeScanner from "./BarcodeScanner";
// import BarcodeReader from 'react-barcode-reader';

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

    return (
        <>
            <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
            <Input placeholder='Basic usage' />
        <BarcodeScanner readers={undefined}/>
        </>
    )
}

export default NewInvoice;