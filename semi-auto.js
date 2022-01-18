import fetch from "node-fetch";


// January
const weekend = [22, 23, 29, 30, 31];
for (let i = 18; i < 32; i++) {
    console.log('date: ' + i);
    let body = '';
    if (weekend.includes(i)) {
        if (i < 10) i = '0' + i;
        console.log('放假date: ' + i);
        body = "{\"startDate\":\"2022-01-" + i + "T11:35:51.279Z\",\"submitDate\":\"2022-01-" + i + "T11:36:09.695Z\",\"answers\":\"[{\\\"questionId\\\":\\\"rc57327e1b8d4449cb57df3cda9c452b5\\\",\\\"answer1\\\":\\\"2022-01-" + i + "\\\"},{\\\"questionId\\\":\\\"r44058503a8c3456c9c67b3a9d50e1999\\\",\\\"answer1\\\":\\\"國定例假日\\\"},{\\\"questionId\\\":\\\"r1ad6eec041294d02b76cd0870448d639\\\",\\\"answer1\\\":\\\"正常，約 36.9℃ (含)以下\\\"},{\\\"questionId\\\":\\\"r326bef86666f424bb6c5a430f4d34e15\\\",\\\"answer1\\\":\\\"沒有出現什麼狀況\\\"},{\\\"questionId\\\":\\\"r5071104ca9e148a8aed200d9f5a89c1c\\\",\\\"answer1\\\":\\\"以上均無\\\"}]\",\"emailReceiptConsent\":false}"
    } else {
        if (i < 10) i = '0' + i;
        console.log('工作date: ' + i);
        body = "{\"startDate\":\"2022-01-" + i + "T11:31:16.028Z\",\"submitDate\":\"2022-01-" + i + "T11:31:28.247Z\",\"answers\":\"[{\\\"questionId\\\":\\\"rc57327e1b8d4449cb57df3cda9c452b5\\\",\\\"answer1\\\":\\\"2022-01-" + i + "\\\"},{\\\"questionId\\\":\\\"r44058503a8c3456c9c67b3a9d50e1999\\\",\\\"answer1\\\":\\\"在公司上班\\\"},{\\\"questionId\\\":\\\"r1ad6eec041294d02b76cd0870448d639\\\",\\\"answer1\\\":\\\"正常，約 36.9℃ (含)以下\\\"},{\\\"questionId\\\":\\\"r326bef86666f424bb6c5a430f4d34e15\\\",\\\"answer1\\\":\\\"沒有出現什麼狀況\\\"},{\\\"questionId\\\":\\\"r5071104ca9e148a8aed200d9f5a89c1c\\\",\\\"answer1\\\":\\\"以上均無\\\"}]\"}"
    }
    let r = (Math.random() + 1).toString(36).substring(7);
    console.log(r + "d8-d52e-41cd-bff2-510b6b" + r);
    fetch("https://forms.office.com/formapi/api/de047c79-d4d9-4af3-91de-bc44b0581490/groups/220e3114-8b24-4157-8837-727d8ef63d14/forms('eXwE3tnU80qR3rxEsFgUkBQxDiIki1dBiDdyfY72PRRUNjJLM09ZTTgxQkVZRjg2NFRRS0U3NUlQSiQlQCN0PWcu')/responses", {
        "headers": {
            "__requestverificationtoken": "IjHaAZP_Dtnyyqj8pLLKBG221OPdNl5x-OdNVR1dZM1gzC0DvxvUGfSQghTDLzazem1IeML-B1CwNeBmmsytz3dbqQREdBipRKfl5nuLANChvrDH-umQ8wmDUY2MjvhEV6u5sAPHGYqiejZ9xQuf0w2",
            "accept": "application/json",
            "accept-language": "zh-TW,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "authorization": "",
            "content-type": "application/json",
            "odata-maxverion": "4.0",
            "odata-version": "4.0",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Microsoft Edge\";v=\"97\", \"Chromium\";v=\"97\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-correlationid": r + "d8-d52e-41cd-bff2-510b6b" + r,
            "x-ms-form-request-ring": "business",
            "x-ms-form-request-source": "ms-formweb",
            "x-usersessionid": "5d783964-8be4-42ac-89a9-19d8a1745ed2"
        },
        "referrer": "https://forms.office.com/Pages/ResponsePage.aspx?id=eXwE3tnU80qR3rxEsFgUkBQxDiIki1dBiDdyfY72PRRUNjJLM09ZTTgxQkVZRjg2NFRRS0U3NUlQSiQlQCN0PWcu",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": body,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(resp => {
        console.log(resp.status);
    });
    await new Promise(resolve => setTimeout(resolve, 5000)); // 3 sec
}

// Feb
const requestverificationtoken = "abrVuHjWJm_LvbcqbvVZ2XZ4kqSz8eBeurfQRikYJSo1RxqaUM_yU5pq10eI69lSZm7d17elnZB_IYYShrLZ-YqPu6kl37RP6ZHYPFlmsbheSKSNE8hCTiaml7TIZPyIH2dWA-tb7MLo7dFGBKA2Aw2";
const usersessionid = "d9dd99a6-55e3-4708-a384-528b7f4807ae";
const weekend = [1, 2, 3, 4, 5, 6, 12, 13, 19, 20, 26, 27];
for (let i = 1; i < 32; i++) {
    let body = '';
    console.log('date: ' + i);
    if (weekend.includes(i)) {
        if (i < 10) i = '0' + i;
        console.log('放假date: ' + i);
        body = "{\"startDate\":\"2022-02-" + i + "T11:35:51.279Z\",\"submitDate\":\"2022-02-" + i + "T11:36:09.695Z\",\"answers\":\"[{\\\"questionId\\\":\\\"rc57327e1b8d4449cb57df3cda9c452b5\\\",\\\"answer1\\\":\\\"2022-02-" + i + "\\\"},{\\\"questionId\\\":\\\"r44058503a8c3456c9c67b3a9d50e1999\\\",\\\"answer1\\\":\\\"國定例假日\\\"},{\\\"questionId\\\":\\\"r1ad6eec041294d02b76cd0870448d639\\\",\\\"answer1\\\":\\\"正常，約 36.9℃ (含)以下\\\"},{\\\"questionId\\\":\\\"r326bef86666f424bb6c5a430f4d34e15\\\",\\\"answer1\\\":\\\"沒有出現什麼狀況\\\"},{\\\"questionId\\\":\\\"r5071104ca9e148a8aed200d9f5a89c1c\\\",\\\"answer1\\\":\\\"以上均無\\\"}]\",\"emailReceiptConsent\":false}"
        console.log(body)
    } else {
        if (i < 10) i = '0' + i;
        console.log('工作date: ' + i);
        body = "{\"startDate\":\"2022-02-" + i + "T11:31:16.028Z\",\"submitDate\":\"2022-02-" + i + "T11:31:28.247Z\",\"answers\":\"[{\\\"questionId\\\":\\\"rc57327e1b8d4449cb57df3cda9c452b5\\\",\\\"answer1\\\":\\\"2022-02-" + i + "\\\"},{\\\"questionId\\\":\\\"r44058503a8c3456c9c67b3a9d50e1999\\\",\\\"answer1\\\":\\\"在公司上班\\\"},{\\\"questionId\\\":\\\"r1ad6eec041294d02b76cd0870448d639\\\",\\\"answer1\\\":\\\"正常，約 36.9℃ (含)以下\\\"},{\\\"questionId\\\":\\\"r326bef86666f424bb6c5a430f4d34e15\\\",\\\"answer1\\\":\\\"沒有出現什麼狀況\\\"},{\\\"questionId\\\":\\\"r5071104ca9e148a8aed200d9f5a89c1c\\\",\\\"answer1\\\":\\\"以上均無\\\"}]\"}"
        console.log(body)
    }
    let r = (Math.random() + 1).toString(36).substring(7);
    fetch("https://forms.office.com/formapi/api/de047c79-d4d9-4af3-91de-bc44b0581490/groups/220e3114-8b24-4157-8837-727d8ef63d14/forms('eXwE3tnU80qR3rxEsFgUkBQxDiIki1dBiDdyfY72PRRUNjJLM09ZTTgxQkVZRjg2NFRRS0U3NUlQSiQlQCN0PWcu')/responses", {
        "headers": {
            "__requestverificationtoken": requestverificationtoken,
            "accept": "application/json",
            "accept-language": "zh-TW,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "authorization": "",
            "content-type": "application/json",
            "odata-maxverion": "4.0",
            "odata-version": "4.0",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Microsoft Edge\";v=\"97\", \"Chromium\";v=\"97\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-correlationid": r + "d8-6cde-4412-a245-" + r + "510b6b",
            "x-ms-form-request-ring": "business",
            "x-ms-form-request-source": "ms-formweb",
            "x-usersessionid": usersessionid
        },
        "referrer": "https://forms.office.com/Pages/ResponsePage.aspx?id=eXwE3tnU80qR3rxEsFgUkBQxDiIki1dBiDdyfY72PRRUNjJLM09ZTTgxQkVZRjg2NFRRS0U3NUlQSiQlQCN0PWcu",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": body,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(resp => {
        console.log(resp.status);
    });
    await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
}
