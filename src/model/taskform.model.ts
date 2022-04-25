import {Schema, model} from 'mongoose';
import TaskFormInterface from '../interfaces/taskform.interface';

const TaskFormSchema = new Schema({
    task:{
        type: String,
        required:true
    },
    userId:{
        type: Schema.Types.ObjectId, ref: "user",
        required:true
    },
    isChecked:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const TaskForm = model<TaskFormInterface>('taskform', TaskFormSchema);

export default TaskForm;