import express from "express";
import keys from "./config/keys";
import connect from "./utils/connect";
import logger from "./utils/logger"
import routes from './routes/routes'
import deserializeUser from './middleware/deserializeUser'



const port = keys.port;
const host = keys.host
const app = express();

app.use(express.json());

app.use(deserializeUser)

app.listen(port, host,async () =>{
    logger.info(`App is running at http://localhost:${port}`);
    await connect()
    routes(app)
});