import mongoose from "mongoose";
import keys  from "../config/keys";
import logger from "./logger"

function connect(){
    const dbUri = keys.dbUri
    return mongoose.connect(dbUri).then(()=>
    {
        logger.info("Connected to db")
    }
    ).catch((error) =>{
        logger.error('could not establish connection')
        process.exit(1)
    })

}

export default connect