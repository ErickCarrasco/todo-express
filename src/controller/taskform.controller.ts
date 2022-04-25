import {Request, Response} from 'express'
import { createNewTaskInput } from '../schema/taskform.schema';
import { CreateTask, findTask, deleteTask, searchSpecificTask, setCompleteTask} from '../service/taskform.service';

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

export async function UpdateTaskHandler(req: Request, res: Response){
    const userId = res.locals.user._id
    const findTask = await searchSpecificTask(req.body)

    if(!findTask){
        return res.sendStatus(404)
    }

    if(userId !== findTask.userId.toString()){
        console.log("ILLEGAL DELETION DETECTED")
        return res.sendStatus(403)
        
    }

    findTask.isChecked=true;
    console.log(findTask);
    await setCompleteTask(findTask._id, findTask, {new: true,})
    return res.sendStatus(200)
}

export async function deleteTaskHandler(req: Request, res: Response){
    const userId = res.locals.user._id
    const findTask = await searchSpecificTask(req.body)

    if(!findTask){
        return res.sendStatus(404)
    }

    if(userId !== findTask.userId.toString()){
        console.log("ILLEGAL DELETION DETECTED")
        return res.sendStatus(403)
        
    }


    await deleteTask(findTask._id);
    return res.sendStatus(200)

}