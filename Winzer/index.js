const fs = require('fs');
const util = require('util');

const read = (fs.readFile);

const PapiClient = require('@pepperi-addons/papi-sdk').PapiClient;

const papiClient = new PapiClient({
    baseURL: "https://papi.pepperi.com/v1.0",
    token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwZDZkZDMzMzkzYmZkMWNkYTc2YjRmNjQ5NGRmNzYzIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2MjE1MTk3NjMsImV4cCI6MTYyMTUyMzM2MywiaXNzIjoiaHR0cHM6Ly9pZHAucGVwcGVyaS5jb20iLCJhdWQiOlsiaHR0cHM6Ly9pZHAucGVwcGVyaS5jb20vcmVzb3VyY2VzIiwicGVwcGVyaS5hcGludCIsInBlcHBlcmkud2FjZCJdLCJjbGllbnRfaWQiOiJpb3MuY29tLndybnR5LnBlcHBlcnkiLCJzdWIiOiI3M2M4OTNjNi1jY2QyLTRhZWMtODg2MC0xN2I1Zjk5MGI2OWEiLCJhdXRoX3RpbWUiOjE2MjE1MTk3NjMsImlkcCI6ImxvY2FsIiwicGVwcGVyaS5hcGludGJhc2V1cmwiOiJodHRwczovL2FwaW50LnBlcHBlcmkuY29tL3Jlc3RhcGkiLCJlbWFpbCI6Ik9yYWNsZU1hcmtldGluZ0B3aW56ZXJ0ZXN0LmNvbSIsInBlcHBlcmkuaWQiOjExODM4NjI2LCJwZXBwZXJpLnVzZXJ1dWlkIjoiNzNjODkzYzYtY2NkMi00YWVjLTg4NjAtMTdiNWY5OTBiNjlhIiwicGVwcGVyaS5kaXN0cmlidXRvcnV1aWQiOiIxYWNmMGMxMi0yNmIzLTQxNjYtODA0MC00YWRiNzQ5ZDkyOTEiLCJwZXBwZXJpLmRpc3RyaWJ1dG9yaWQiOjMwMDEzMzc2LCJwZXBwZXJpLmRhdGFjZW50ZXIiOiJwcm9kIiwicGVwcGVyaS5lbXBsb3llZXR5cGUiOjEsInBlcHBlcmkuYmFzZXVybCI6Imh0dHBzOi8vcGFwaS5wZXBwZXJpLmNvbS9WMS4wIiwicGVwcGVyaS53YWNkYmFzZXVybCI6Imh0dHBzOi8vY3BhcGkucGVwcGVyaS5jb20iLCJuYW1lIjoiTWFya2V0aW5nIE9yYWNsZSIsInNjb3BlIjpbInBlcHBlcmkuYXBpbnQiLCJwZXBwZXJpLndhY2QiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.SV72v5cxfaTTrrjWR8dHP1Ga87-e8NYy_fayylPkX0tuk6UShZJvWgzaKX98rWSWCPnOn0oAUAqgPgm0VFiP0li2PbKz5JjxZBKYk0qi71GgcdCAbWLvrWwoDvyA5Zcu5_rmZVyM6fRjTDaxHBjT81F8JSixS7_ayjWp-UZTR0jpSpkwKhu25rs3-uwQsaJNLdDCzOqWA-Kt54ShMMAZWRQAiGMHpIwrNE2UIJdMF8dpfTTBU-ZHBJsnH6IFA3Lv2_y4G1pw-t4cP5wDHFWOmankZR3qV9HXqJb_6rayM1UY9QovUhGdeYGcYcw8GgQ4teWKAkbKP5rLXDTE_VUpVg"
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
