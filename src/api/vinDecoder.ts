// https://vindecipher.com/omnivin/index.cfm?action=decode
const omniVin = () => {
    return fetch("https://vindecipher.com/omnivin/index.cfm?action=decode", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            // "sec-fetch-dest": "document",
            // "sec-fetch-mode": "navigate",
            // "sec-fetch-site": "same-origin",
            "mode": "cors", // no-cors, *cors, same-origin
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": "CFID=317349597; CFTOKEN=9256d78765ff717a-B59DB105-B3B1-86C7-23158A423A69ACB3",
            "Referer": "https://vindecipher.com/omnivin/",
            // "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "vinNum=JALC4W165B7003640&submitBtn=Get+VIN+Data",
        "method": "POST"
    });
}

// https://verifiny.com/check
const odometerCheck = () => {

}

export {
    omniVin,
    odometerCheck,
}