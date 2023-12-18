const fs = require('fs');
const util = require('util');

const read = (fs.readFile);

const PapiClient = require('@pepperi-addons/papi-sdk').PapiClient;

const papiClient = new PapiClient({
    baseURL: "https://papi.pepperi.com/v1.0",
    token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwZDZkZDMzMzkzYmZkMWNkYTc2YjRmNjQ5NGRmNzYzIiwidHlwIjoiSldUIn0.eyJuYmYiOjE3MDI4OTYyNjQsImV4cCI6MTcwMjg5OTg2NCwiaXNzIjoiaHR0cHM6Ly9pZHAucGVwcGVyaS5jb20iLCJhdWQiOlsiaHR0cHM6Ly9pZHAucGVwcGVyaS5jb20vcmVzb3VyY2VzIiwicGVwcGVyaS5hcGludCIsInBlcHBlcmkud2ViYXBwX2FwaSJdLCJjbGllbnRfaWQiOiJwZXBwZXJpLndlYmFwcC5hcHAucGVwcGVyaS5jb20iLCJzdWIiOiI2OWM4NTdkNi0xZGZlLTQxZjctOTgwYy1mYTkyMGNhZTBhZDMiLCJhdXRoX3RpbWUiOjE3MDI4ODkxMTIsImlkcCI6ImF6dXJlLXBlcHBlcmkiLCJlbWFpbCI6ImFkbWluRGV2QG5lbHQuY29tIiwicGVwcGVyaS5pZCI6MTUxNDI4ODYsInBlcHBlcmkudXNlcnV1aWQiOiI2OWM4NTdkNi0xZGZlLTQxZjctOTgwYy1mYTkyMGNhZTBhZDMiLCJwZXBwZXJpLmRpc3RyaWJ1dG9yaWQiOjMwMDE1NjY0LCJwZXBwZXJpLmRpc3RyaWJ1dG9ydXVpZCI6ImVmNzBlYTNlLWNhNTMtNGVjZi1hNDJjLTQ0NTAzNmEzYTNkZCIsInBlcHBlcmkuZGF0YWNlbnRlciI6InByb2QiLCJwZXBwZXJpLmFwaW50YmFzZXVybCI6Imh0dHBzOi8vYXBpbnQucGVwcGVyaS5jb20vcmVzdGFwaSIsInBlcHBlcmkuZW1wbG95ZWV0eXBlIjoxLCJwZXBwZXJpLmJhc2V1cmwiOiJodHRwczovL3BhcGkucGVwcGVyaS5jb20vVjEuMCIsInBlcHBlcmkud2FjZGJhc2V1cmwiOiJodHRwczovL2NwYXBpLnBlcHBlcmkuY29tIiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsInBlcHBlcmkud2ViYXBwX2lkZW50aXR5IiwicGVwcGVyaS5wcm9maWxlIiwicGVwcGVyaS5hcGludCIsInBlcHBlcmkud2ViYXBwX2FwaSJdLCJhbXIiOlsiZXh0ZXJuYWwiXX0.bebS4qh_M3PiilOjIiXNM_LKirq3i3N4lFqMX1oin6PYOKpqeWsVcrMKxbJnsPnYgX5MkYbyUHt6rLaw_ec_Qf-WUqAP2jwzl94UHyjnPtPfk9fzNIbCImZX8rGo22ovlKeJJgew1b0lPthRLPChUCdI4X_wZVj4h5EQTCr638aibJFT2O2R7M1m7I9M6X0MsHXxxyVHlAlSOgYyGQV4aflATijVX6CIJBbpdgO8FBYO1wOpD2VI_0BjtXaWvFMAs3C08_zffLg2TPIJIgT7klZfEjp9BXHogM1evvoH0vVeM59BAm69hpfQ53xrK0IUvNYlHoN8975e5BhJGF0efw"
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
    console.log(res);
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
// Dermalogica - B2B Custom Order - 329880
// Nelt - B2B - 330914


updateTransactionLinesFields(330914); 
// getTransactionLineFields(329880); 
// getTransactions();
// getFields(286982);
// getTransactionLineField(329880,'TSAPromoDescription');
// getTransactionFields(329880);
