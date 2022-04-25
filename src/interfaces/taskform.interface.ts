import {Document} from 'mongoose';
import UserInterface from './user.interface'

interface TaskFormInteface extends Document{
    task: string;
    userId:  UserInterface["_id"];
    isChecked: boolean;
    createdDate: Date;
}

export default TaskFormInteface;