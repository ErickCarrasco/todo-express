import express from "express";
import keys from "./config/keys";
import connect from "./utils/connect";
import logger from "./utils/logger"
import routes from './routes/routes'

const port = keys.port;
const app = express();

app.listen(port, async () =>{
    logger.info(`App is running at http://localhost:${port}`);
    await connect()
    routes(app)
});