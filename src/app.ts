import express from "express";
import keys from "./config/keys";

const port = keys.port;
const app = express();

app.listen(port, () =>{
    console.log("App is running");
});