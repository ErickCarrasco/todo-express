import {Request, Response} from 'express'
import { createNewTaskInput } from '../schema/taskform.schema';
import { CreateTask, findTask, deleteTask} from '../service/taskform.service';

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
    const update = req.body.task

    const task = await findTask(update)

    if(!task){
        return res.sendStatus(404)
    }



    await deleteTask({update});

}