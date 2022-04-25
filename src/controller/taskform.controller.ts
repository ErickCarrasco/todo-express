import {Request, Response} from 'express'
import { createNewTaskInput } from '../schema/taskform.schema';
import { CreateTask, findTask, deleteTask, searchSpecificTask} from '../service/taskform.service';

export async function CreateTaskHandler(req: Request<{}, {}, createNewTaskInput["body"]>, res: Response){
    const userId = res.locals.user._id
    const body = req.body
    const task = await CreateTask({userId, ...body})

    return res.send(task)

}

export async function getTaskHandler(req: Request, res: Response){
    const userId = res.locals.user._id
    const tasks = await findTask({userId})
    return res.send(tasks)



}

export async function UpdateTask(req: Request, res: Response){

}

export async function deleteTaskHandler(req: Request, res: Response){
    const userId = res.locals.user._id
    const findTask = await searchSpecificTask(req.body)

    console.log(findTask)
   
    if(!findTask){
        return res.sendStatus(404)
    }
    //console.log(userId)
    //console.log(findTask.userId.toString())
    if(userId !== findTask.userId.toString()){
        console.log("ILLEGAL DELETION DETECTED")
        return res.sendStatus(403)
        
    }


    await deleteTask(findTask._id);
    return res.sendStatus(200)

}