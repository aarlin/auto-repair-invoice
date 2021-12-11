import { Button } from '@chakra-ui/button';
import easyinvoice from 'easyinvoice';
import { useState } from "react";

const InvoiceGenerator = () => {
    const [invoiceBase64, setInvoiceBase64] = useState({});
    const createInvoice = async () => {
        //See documentation for all data properties
        const data = getSampleData();
        const result = await easyinvoice.createInvoice(data);
        console.log(result);
        setInvoiceBase64({
            ...invoiceBase64,
            invoiceBase64: result.pdf
        });
    }
    const downloadInvoice = async () => {
        //See documentation for all data properties
        const data = getSampleData();
        const result = await easyinvoice.createInvoice(data);
        easyinvoice.download('myInvoice.pdf', result.pdf);
        //	you can download like this as well:
        //	easyinvoice.download();
        //	easyinvoice.download('myInvoice.pdf');  	
    }
    const renderInvoice = async () => {
        //See documentation for all data properties
        const data = getSampleData();
        const result = await easyinvoice.createInvoice(data);
        easyinvoice.render('pdf', result.pdf);
    }

    const getSampleData = () => {
        return {
            //"documentTitle": "RECEIPT", //Defaults to INVOICE

            //"locale": "de-DE", 
            //Defaults to en-US. List of locales: https://datahub.io/core/language-codes/r/3.html 

            "currency": "USD",
            //Defaults to no currency. List of currency codes: https://www.iban.com/currency-codes

            "taxNotation": "vat", //or gst
            "marginTop": 25,
            "marginRight": 25,
            "marginLeft": 25,
            "marginBottom": 25,
            "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png", //or base64
            "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg", //or base64
            "sender": {
                "company": "Sample Corp",
                "address": "Sample Street 123",
                "zip": "1234 AB",
                "city": "Sampletown",
                "country": "Samplecountry"
                //"custom1": "custom value 1",
                //"custom2": "custom value 2",
                //"custom3": "custom value 3"
            },
            "client": {
                "company": "Client Corp",
                "address": "Clientstreet 456",
                "zip": "4567 CD",
                "city": "Clientcity",
                "country": "Clientcountry"
                //"custom1": "custom value 1",
                //"custom2": "custom value 2",
                //"custom3": "custom value 3"
            },
            "invoiceNumber": "2021.0001",
            "invoiceDate": "1.1.2021",
            "products": [
                {
                    "quantity": "2",
                    "description": "Test1",
                    "tax": 6,
                    "price": 33.87
                },
                {
                    "quantity": "4",
                    "description": "Test2",
                    "tax": 21,
                    "price": 10.45
                }
            ],
            "bottomNotice": "Kindly pay your invoice within 15 days.",
            //Used for translating the headers to your preferred language
            //Defaults to English. Below example is translated to Dutch
            // "translate": { 
            //     "invoiceNumber": "Factuurnummer",
            //     "invoiceDate": "Factuurdatum",
            //     "products": "Producten", 
            //     "quantity": "Aantal", 
            //     "price": "Prijs",
            //     "subtotal": "Subtotaal",
            //     "total": "Totaal" 
            // }
        };
    }

    return (
        <div>
            <Button mt={4} colorScheme='teal' onClick={() => createInvoice()} type='submit'>Create Invoice</Button>
            <Button mt={4} colorScheme='teal' onClick={() => downloadInvoice()} type='submit'>Download Invoice</Button>
            <Button mt={4} colorScheme='teal' onClick={() => renderInvoice()} type='submit'>Render Invoice</Button>
            <br />
            <br />
            <div id="pdf"></div>
        </div>
    )
}

export default InvoiceGenerator;
