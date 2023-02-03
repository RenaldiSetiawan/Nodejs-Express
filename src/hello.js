import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/events', (req, res, next) => {
    res.json({
        "meta": {
          "responseCode": "9999",
          "responseMessage": "System Error",
          "timestamp": "20220419 22:30:22:334",
          "transactionId": "001",
          "userId": ""
        }
      });
});

app.listen(3000, () => {
    console.info("Server started on port 3000");
});