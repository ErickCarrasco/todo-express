import {Document} from 'mongoose';

interface TaskFormInteface extends Document{
    task: string;
    userId: string;
    isChecked: boolean;
    createdDate: Date;
}

export default TaskFormInteface;