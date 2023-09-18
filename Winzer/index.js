const fs = require('fs');
const util = require('util');

const read = (fs.readFile);

const PapiClient = require('@pepperi-addons/papi-sdk').PapiClient;

const papiClient = new PapiClient({
    baseURL: "https://papi.pepperi.com/v1.0",
    token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwZDZkZDMzMzkzYmZkMWNkYTc2YjRmNjQ5NGRmNzYzIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2OTUwMjgwOTYsImV4cCI6MTY5NTAzMTY5NiwiaXNzIjoiaHR0cHM6Ly9pZHAucGVwcGVyaS5jb20iLCJhdWQiOlsiaHR0cHM6Ly9pZHAucGVwcGVyaS5jb20vcmVzb3VyY2VzIiwicGVwcGVyaS5hcGludCIsInBlcHBlcmkud2ViYXBwX2FwaSJdLCJjbGllbnRfaWQiOiJwZXBwZXJpLndlYmFwcC5hcHAucGVwcGVyaS5jb20iLCJzdWIiOiJmNjA1MTk0Ni1hM2I3LTQ3ZTAtYjIwNC1kZThhNTk3MDhhNjEiLCJhdXRoX3RpbWUiOjE2OTUwMjgwOTMsImlkcCI6ImF6dXJlLXBlcHBlcmkiLCJlbWFpbCI6ImFkbWluQGRlcm1hbG9naWNhYjJiLmNvbSIsInBlcHBlcmkuaWQiOjE0ODMwMTc3LCJwZXBwZXJpLnVzZXJ1dWlkIjoiZjYwNTE5NDYtYTNiNy00N2UwLWIyMDQtZGU4YTU5NzA4YTYxIiwicGVwcGVyaS5kaXN0cmlidXRvcmlkIjozMDAxNTY0MywicGVwcGVyaS5kaXN0cmlidXRvcnV1aWQiOiIzMDY2YjVmOC0xNDQwLTQ2MTQtOTlhMC02MWQ5MTJjOTYyYjkiLCJwZXBwZXJpLmRhdGFjZW50ZXIiOiJwcm9kIiwicGVwcGVyaS5hcGludGJhc2V1cmwiOiJodHRwczovL2FwaW50LnBlcHBlcmkuY29tL3Jlc3RhcGkiLCJwZXBwZXJpLmVtcGxveWVldHlwZSI6MSwicGVwcGVyaS5iYXNldXJsIjoiaHR0cHM6Ly9wYXBpLnBlcHBlcmkuY29tL1YxLjAiLCJwZXBwZXJpLndhY2RiYXNldXJsIjoiaHR0cHM6Ly9jcGFwaS5wZXBwZXJpLmNvbSIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJwZXBwZXJpLndlYmFwcF9pZGVudGl0eSIsInBlcHBlcmkucHJvZmlsZSIsInBlcHBlcmkuYXBpbnQiLCJwZXBwZXJpLndlYmFwcF9hcGkiXSwiYW1yIjpbImV4dGVybmFsIl19.tEqujb-u2sP5TdY-wXWKjjwrODZaC2icKSdIDDAq3tgOs-2wck7A3MbhnJK1Tsatj5GB3DgXq7YdSWAS-IlbhJtfw0YIfauSQyO0fK5px3IsIe2KEINJQOl4mjLk5RvYaKRvao_jpADgSWfRoHsMpnPpmTYPQx8PMmFSwrni3iXRZtHyuOqZINwpIBdPp1iUjCxVujjwA8eb1QfBV2XSL3vpYuI_4bxj9sYuZ3gNJIRVsyYkCiH5ryJa2BCKLlAZqIR1hNS6HWwUiLFLUPebPazE9xoch-Hy9jkiSZuUaPllJVmThnSyF51SA0ybKXCHfwIi6Xe4T-SU7tB1Fw56bQ"
});

const folder = './Fields/';
const jsExtension = '.js';

async function updateTransactionLinesFields(transactionId) {
    var fields = require(folder + 'fields.json')
    if (fields) {
        fields.forEach(element => {
            updateTransactionLinesField(transactionId, element);
        });
        // updateTransactionLinesField(transactionId, fields[0]);
    }
}

async function updateTransactionLinesField(transactionId, fieldConfig) {
    var filePath = folder + fieldConfig.FieldID + jsExtension;
    var code = fs.readFileSync(filePath,'utf8');
    // var code = await read(filePath);

    const res = await papiClient.metaData.type('transaction_lines').types.subtype(transactionId).fields.upsert({
        FieldID: fieldConfig.FieldID,
        Label: fieldConfig.Label,
        CalculatedRuleEngine: {
            JSFormula: code,
            ParticipatingFields: fieldConfig.CalculatedRuleEngine.ParticipatingFields,
            CalculatedOn: fieldConfig.CalculatedRuleEngine.CalculatedOn,
            Temporary: fieldConfig.CalculatedRuleEngine.Temporary  
        },
        Type: fieldConfig.Type,
        Format: fieldConfig.Format,
        UIType: fieldConfig.UIType
    });
}

async function getTransactions() {
    const res = await papiClient.metaData.type('transactions').types.get();
    var a = 1;
}
async function getTransactionFields(transactionId) {
    const res = await papiClient.metaData.type('transactions').types.subtype(transactionId).fields.get();
    console.log(res);
}
async function getTransactionField(transactionId, apiName) {
    const res = await papiClient.metaData.type('transactions').types.subtype(transactionId).fields.get(apiName);
    console.log(res); 
}
async function getTransactionLineFields(transactionId) {
    const res = await papiClient.metaData.type('transaction_lines').types.subtype(transactionId).fields.get();
    console.log(res);
}
async function getTransactionLineField(transactionId, apiName) {
    var res;
    try {
        res = await papiClient.metaData.type('transaction_lines').types.subtype(transactionId).fields.get(apiName);
    } catch (error) {
        console.log(error);
    }
    return res;
}
async function deleteTransactionLineField(transactionId, apiName) {
    var res;
    try {
        res = await papiClient.metaData.type('transaction_lines').types.subtype(transactionId).fields.delete(apiName);
    } catch (error) {
        console.log(error); 
    }
    return res;
}


// Winzer Oracle Dev - FS Open Catalog 295130
// Winzer B2B - Open Catalog 286982
// millori Sales Order 266961
updateTransactionLinesFields(295130); 




// updateTSA('./productTitle.js', "TSAProductTitle2");
//getTransactions();
// getFields(286982);
// getTransactionLineField(286982,'TSAProductTitle');
