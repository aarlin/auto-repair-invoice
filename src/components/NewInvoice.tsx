import { Select, Input } from "@chakra-ui/react";
import DatePicker from "react-datepicker";

const NewInvoice = () => {
    const handleDateSelect = () => {

    }

    const handleDateChange = () => {
        
    }
    return (
        <>
            <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
            <Input placeholder='Basic usage' />
            <DatePicker onSelect={handleDateSelect} onChange={handleDateChange}></DatePicker>
        </>
    )
}

export default NewInvoice;