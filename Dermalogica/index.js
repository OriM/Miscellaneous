const fs = require('fs');
const util = require('util');

const read = (fs.readFile);

const PapiClient = require('@pepperi-addons/papi-sdk').PapiClient;

const papiClient = new PapiClient({
    baseURL: "https://papi.pepperi.com/v1.0",
    token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwZDZkZDMzMzkzYmZkMWNkYTc2YjRmNjQ5NGRmNzYzIiwidHlwIjoiSldUIn0.eyJuYmYiOjE2OTQ0MzMxMjcsImV4cCI6MTY5NDQzNjcyNywiaXNzIjoiaHR0cHM6Ly9pZHAucGVwcGVyaS5jb20iLCJhdWQiOlsiaHR0cHM6Ly9pZHAucGVwcGVyaS5jb20vcmVzb3VyY2VzIiwicGVwcGVyaS5hcGludCIsInBlcHBlcmkud2ViYXBwX2FwaSJdLCJjbGllbnRfaWQiOiJwZXBwZXJpLndlYmFwcC5hcHAucGVwcGVyaS5jb20iLCJzdWIiOiJmNjA1MTk0Ni1hM2I3LTQ3ZTAtYjIwNC1kZThhNTk3MDhhNjEiLCJhdXRoX3RpbWUiOjE2OTQzMzM5MDIsImlkcCI6ImF6dXJlLXBlcHBlcmkiLCJlbWFpbCI6ImFkbWluQGRlcm1hbG9naWNhYjJiLmNvbSIsInBlcHBlcmkuaWQiOjE0ODMwMTc3LCJwZXBwZXJpLnVzZXJ1dWlkIjoiZjYwNTE5NDYtYTNiNy00N2UwLWIyMDQtZGU4YTU5NzA4YTYxIiwicGVwcGVyaS5kaXN0cmlidXRvcmlkIjozMDAxNTY0MywicGVwcGVyaS5kaXN0cmlidXRvcnV1aWQiOiIzMDY2YjVmOC0xNDQwLTQ2MTQtOTlhMC02MWQ5MTJjOTYyYjkiLCJwZXBwZXJpLmRhdGFjZW50ZXIiOiJwcm9kIiwicGVwcGVyaS5hcGludGJhc2V1cmwiOiJodHRwczovL2FwaW50LnBlcHBlcmkuY29tL3Jlc3RhcGkiLCJwZXBwZXJpLmVtcGxveWVldHlwZSI6MSwicGVwcGVyaS5iYXNldXJsIjoiaHR0cHM6Ly9wYXBpLnBlcHBlcmkuY29tL1YxLjAiLCJwZXBwZXJpLndhY2RiYXNldXJsIjoiaHR0cHM6Ly9jcGFwaS5wZXBwZXJpLmNvbSIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJwZXBwZXJpLndlYmFwcF9pZGVudGl0eSIsInBlcHBlcmkucHJvZmlsZSIsInBlcHBlcmkuYXBpbnQiLCJwZXBwZXJpLndlYmFwcF9hcGkiXSwiYW1yIjpbImV4dGVybmFsIl19.YUX5C5OOUtYw5JVNtBInuIQL5jTsuYNIeXA20Wq0FyO3G_9cgSHtHdspDgVJO5ESPjaRFx4P_S6KfFIxJMr7EpzkoggHAXA_sg0d1Ks-mGbh24o-5BqDTw5TjOfrJPxoCRgiMPPtvctjFIhullX2jRexz1yd3byGwKqGFQ2fupiQZOFhfbv0UnuE8-GMmjSqkhr3X5AaFWhi8xVz7NLkX1AbC06AEmQAk9Matfp7tcq0CEkTqHE8059g4amXY4ISQvlrDF9XG7CZ8HzIhqtRzfwkWiSTuyX2AEq61G1bLCWaHH8rhGNI2DAwRHY5x6Jf9HH8bM7yqFIXgETWWBn0CA"
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



// updateTransactionLinesFields(329880); 
// getTransactionLineFields(329880); 
// getTransactions();
// getFields(286982);
getTransactionLineField(329880,'TSAUnavailableComment');
// getTransactionFields(329880);
