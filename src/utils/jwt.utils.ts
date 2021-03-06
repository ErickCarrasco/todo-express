import jwt from "jsonwebtoken";
import keys from "../config/keys";

const privateKey = <string>keys.privateKey;
const publicKey = <string>keys.publicKey;


export function signJwt(object:Object, options?: jwt.SignOptions | undefined){
    return jwt.sign(object, privateKey, {
        ...(options && options),
        algorithm: 'RS256',
    })
}

export function verifyJwt(token: string){
    try{
        const decoded = jwt.verify(token, publicKey);
        
        return{
            valid:true,
            expired: false,
            decoded, 
        };
    }catch(e: any){
        return{
            valid:false,
            expired: e.message === "jwt expired",
            decoded: null
        };
    }
}

