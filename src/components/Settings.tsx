import { SimpleGrid, Box } from "@chakra-ui/layout";
import { useForm } from 'react-hook-form'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
} from '@chakra-ui/react'
import { useState } from "react";
import Stats from './Stats';

type ISubmitResult = {
    companyName: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    faxNumber: string;
    email: string;
}

const Settings = () => {
    const [data, setData] = useState<ISubmitResult>();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    const onSubmit = (values: any) => {
        return new Promise<void>((resolve) => {
            setData(values);
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                resolve()
            }, 3000)
        })
    }


    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor='companyName'>Company Name</FormLabel>
                <Input
                    id='companyName'
                    placeholder='companyName'
                    {...register('companyName', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                />
                <FormLabel htmlFor='street'>Street</FormLabel>
                <Input
                    id='street'
                    placeholder='street'
                    {...register('street', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                />
                <FormLabel htmlFor='city'>City</FormLabel>
                <Input
                    id='city'
                    placeholder='city'
                    {...register('city', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                />
                <FormLabel htmlFor='state'>State</FormLabel>
                <Input
                    id='state'
                    placeholder='state'
                    {...register('state', {
                        required: 'This is required',
                        minLength: { value: 2, message: 'Minimum length should be 2' },
                    })}
                />
                <FormLabel htmlFor='zip'>Zip Code</FormLabel>
                <Input
                    id='zip'
                    placeholder='zip'
                    {...register('zip', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                />
                <FormLabel htmlFor='phoneNumber'>Phone Number</FormLabel>
                <Input
                    id='phoneNumber'
                    placeholder='phoneNumber'
                    {...register('phoneNumber', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                />
                <FormLabel htmlFor='faxNumber'>Fax Number</FormLabel>
                <Input
                    id='faxNumber'
                    placeholder='faxNumber'
                    {...register('faxNumber', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                />
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                    id='email'
                    placeholder='email'
                    {...register('email', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                />
                <FormErrorMessage>
                    {errors.name && errors.name.message}
                </FormErrorMessage>
            </FormControl>
            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                Submit
            </Button>
        </form>

        {data && (
            <Stats
                companyName={data.companyName}
                street={data.street}
                city={data.city}
                state={data.state}
                zip={data.zip}
                phoneNumber={data.phoneNumber}
                faxNumber={data.faxNumber}
                email={data.email}
            />
        )}
        </>
    )
}

export default Settings;
