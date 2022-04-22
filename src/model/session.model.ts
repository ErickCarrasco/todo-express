import {Schema, model} from 'mongoose';
import SessionInterface from '../interfaces/session.interface';


const SessionSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId, ref: "user"
        },
        valid: {
            type: Boolean, 
            default:true},
        userAgent:{
            type:String
        }
    },{
        timestamps: true,
    }
)

const Session = model<SessionInterface>('session', SessionSchema);

export default Session;