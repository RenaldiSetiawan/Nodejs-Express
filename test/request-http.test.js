import express from "express";
import request from "supertest";

const app = express();

app.get('/', (req, res) => {
    res.send(`Hello ${req.query.name}`);
});

test("test req http", async () => {
    const response = await request(app).get("/").query({ name: "bro"});
    expect(response.text).toBe("Hello bro");
});