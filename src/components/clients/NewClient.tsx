import { Button, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
// import BarcodeReader from 'react-barcode-reader';

const NewClient = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef: any = useRef();
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
            <Button mt={4}
                colorScheme='teal'
                onClick={onOpen}
            >New Client</Button>


            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>New Client</ModalHeader>
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

                        <FormControl mt={4}>
                            <FormLabel>Phone Number</FormLabel>
                            <InputGroup>
                                <InputLeftAddon children={invoicePrepend} />
                                <Input type='tel' placeholder='phone number' />
                            </InputGroup>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Address</FormLabel>
                            <Input placeholder='Address' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>City</FormLabel>
                            <Input placeholder='City' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>State</FormLabel>
                            <Input placeholder='State' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Phone Number</FormLabel>
                            <Input placeholder='Phone Number' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Email' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Notes</FormLabel>
                            <Input placeholder='Notes' />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Labels</FormLabel>
                            <Input placeholder='Labels' />
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

export default NewClient;
