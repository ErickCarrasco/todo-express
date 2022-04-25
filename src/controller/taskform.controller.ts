import {Request, Response} from 'express'
import { createNewTaskInput } from '../schema/taskform.schema';
import { CreateTask } from '../service/taskform.service';

export async function CreateTaskHandler(req: Request<{}, {}, createNewTaskInput["body"]>, res: Response){
    const userId = res.locals.user._id
    const body = req.body
    const task = await CreateTask({userId, ...body})

    return res.send(task)

}