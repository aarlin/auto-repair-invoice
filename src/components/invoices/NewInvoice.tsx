import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";

const NewInvoice = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef: any = React.useRef()
    const finalRef: any = React.useRef()

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
            <Button mt={4}
                colorScheme='teal'
                onClick={onOpen}
            >New Invoice</Button>


            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>New Invoice</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input ref={initialRef} placeholder='First name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder='Last name' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NewInvoice;


