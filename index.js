const express = require('express');

const {google, GoogleApis} = require("googleapis");

const app = express();
var cors = require('cors');
app.use(cors());
app.get("/", async (req, res) =>  {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({version:"v4",auth:client});

    const metaData = await googleSheets.spreadsheets.get({
        auth: auth,
        spreadsheetId: "1Qa2eEsq59wFcs89jG5tTZvHJ6JKof9n52SwGL49R5E0"
    });

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId: "1Qa2eEsq59wFcs89jG5tTZvHJ6JKof9n52SwGL49R5E0",
        range: "Sheet1!A3:AC",

    });
    res.send(getRows.data);
});
app.get('/notifications',async (req,res)=>{
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({version:"v4",auth:client});

    const metaData = await googleSheets.spreadsheets.get({
        auth: auth,
        spreadsheetId: "1Qa2eEsq59wFcs89jG5tTZvHJ6JKof9n52SwGL49R5E0"
    });

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId: "1Qa2eEsq59wFcs89jG5tTZvHJ6JKof9n52SwGL49R5E0",
        range: "Sheet2!A3:AC",

    });
    res.send(getRows.data);
})
app.listen(1337,(req, res) => {
    console.log("RUNNING ON 1337");
})