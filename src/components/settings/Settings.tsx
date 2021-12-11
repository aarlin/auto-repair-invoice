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
import Stats from '../common/Stats';
import Dropzone from "./Dropzone";
import create from 'zustand';

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

const initialState = {
    companyName: 'Company XYZ',
    street: 'Street 123',
    city: 'City Z',
    state: 'NY',
    zip: '12312',
    phoneNumber: '555-555-5555',
    faxNumber: '555-555-5555',
    email: 'email@email.com',
}

const useStore = create((set: any) => ({
    ...initialState,
    clear: () => set(initialState),
    replace: (value: any) => set({ ...initialState, ...value, edited: true }),
    changeField: (e: any) => {
      const { name, value } = e.target;
      set({ [name]: value, edited: true });
    },
  }));

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
    const changeField = useStore((state) => state.changeField);

    const importFile = () => {
        console.log('importFile')
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
                    onChange={changeField}
                />
                <FormLabel htmlFor='street'>Street</FormLabel>
                <Input
                    id='street'
                    placeholder='street'
                    {...register('street', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    onChange={changeField}
                />
                <FormLabel htmlFor='city'>City</FormLabel>
                <Input
                    id='city'
                    placeholder='city'
                    {...register('city', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    onChange={changeField}
                />
                <FormLabel htmlFor='state'>State</FormLabel>
                <Input
                    id='state'
                    placeholder='state'
                    {...register('state', {
                        required: 'This is required',
                        minLength: { value: 2, message: 'Minimum length should be 2' },
                    })}
                    onChange={changeField}
                />
                <FormLabel htmlFor='zip'>Zip Code</FormLabel>
                <Input
                    id='zip'
                    placeholder='zip'
                    {...register('zip', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    onChange={changeField}
                />
                <FormLabel htmlFor='phoneNumber'>Phone Number</FormLabel>
                <Input
                    id='phoneNumber'
                    placeholder='phoneNumber'
                    {...register('phoneNumber', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    onChange={changeField}
                />
                <FormLabel htmlFor='faxNumber'>Fax Number</FormLabel>
                <Input
                    id='faxNumber'
                    placeholder='faxNumber'
                    {...register('faxNumber', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    onChange={changeField}
                />
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                    id='email'
                    placeholder='email'
                    {...register('email', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    onChange={changeField}
                />
                <FormLabel htmlFor='logoUpload'>Company Logo</FormLabel>
                <Dropzone onFileAccepted={importFile}/>
                <FormErrorMessage>
                    {errors.name && errors.name.message}
                </FormErrorMessage>
            </FormControl>
            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                Save Changes
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
