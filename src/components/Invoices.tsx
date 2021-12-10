import * as React from "react";
import { Button, ChakraProvider, Heading } from "@chakra-ui/react";
import { Column } from "react-table";
import { DataTable } from "./DataTable";
import { useNavigate } from 'react-router-dom';
import InvoiceGenerator from "./InvoiceGenerator";

type UnitConversion = {
    invoiceId: string;
    client: string;
    date: string;
    dueDate: string;
    sum: number;
    state: string;
};

const data: UnitConversion[] = [
    {
        invoiceId: "#INV-232",
        client: "Debitly Ltd",
        date: '2019-10-23',
        dueDate: '2019-10-30',
        sum: 119.99,
        state: 'payed'
    },
    {
        invoiceId: "#INV-233",
        client: "Maxibuilder Software Ltd",
        date: '2019-10-23',
        dueDate: '2019-10-30',
        sum: 2400.00,
        state: 'confirmed'
    },

];

// see https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-table
// to configure react-table typings
const columns: Column<UnitConversion>[] = [
    {
        Header: "Invoice Id",
        accessor: "invoiceId"
    },
    {
        Header: "Client",
        accessor: "client"
    },
    {
        Header: "Date",
        accessor: "date",
    },
    {
        Header: "Due Date",
        accessor: "dueDate",
    },
    {
        Header: "Sum",
        accessor: "sum",
        isNumeric: true
    },
    {
        Header: "State",
        accessor: "state",
    }
];

const Invoices = () => {
    let navigate = useNavigate();

    const createNewInvoice = () => {
        navigate('/invoices/new', { replace: true} );
    }
    return (
        <>
            <Heading>Invoices</Heading>
            <Button
                mt={4}
                colorScheme='teal'
                onClick={createNewInvoice}
                type='submit'
            >
                New Invoice
            </Button>
            <DataTable columns={columns} data={data}></DataTable>
            <InvoiceGenerator/>
        </>
    )
}

export default Invoices;