import TaskForm from "../model/taskform.model";
import TaskFormInteface from "../interfaces/taskform.interface";
import {DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery} from 'mongoose'
import { string } from "zod";

export async function CreateTask(input:DocumentDefinition<Omit<TaskFormInteface, "createdDate" | "isChecked">>){
    const task = await TaskForm.create(input)
    return task.toJSON()
}

export async function findTask(query: FilterQuery<TaskFormInteface>){
    return TaskForm.find(query).lean();
}

export async function searchSpecificTask({task}:{task:string}){
    const taskRes = await TaskForm.findOne({task})
    if(!taskRes){
        return false;
    }

    return taskRes;
}

export async function setCompleteTask(query: FilterQuery<TaskFormInteface>, update: UpdateQuery<TaskFormInteface>, options: QueryOptions){
    return TaskForm.findOneAndUpdate(query, update, options);
}

export async function deleteTask(query: FilterQuery<TaskFormInteface>){
    console.log("query",query)
    return TaskForm.findByIdAndDelete(query);
}