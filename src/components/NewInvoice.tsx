import { Select, Input } from "@chakra-ui/react";
import { Datepicker } from "./Datepicker";

const NewInvoice = () => {
    return (
        <>
            <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
            <Input placeholder='Basic usage' />
            <Datepicker position="relative" />
        </>
    )
}

export default NewInvoice;