import { Express, Request, Response } from "express";
import { CreateSessionHandler, getUserSessionsHandler } from "../controller/session.controller";
import { createUserHandler } from "../controller/user.controller";
import validate from "../middleware/validateResource";
import { createSessionSchema } from "../schema/session.schema";
import {createUserSchema} from "../schema/user.schema";
import requireUser from "../middleware/requireUser";
import { createNewTaskSchema, deleteTaskSchema, updateTaskSchema } from "../schema/taskform.schema";
import { CreateTaskHandler, deleteTaskHandler, getTaskHandler, UpdateTaskHandler } from "../controller/taskform.controller";

function routes(app: Express){
    app.get('/healthcheck', (req: Request, res: Response) =>res.sendStatus(200))

    app.post('/api/users', validate(createUserSchema),createUserHandler )

    app.post('/api/sessions', validate(createSessionSchema),CreateSessionHandler )

    app.get('/api/sessions', requireUser, getUserSessionsHandler)

    app.post('/api/tasks', [requireUser, validate(createNewTaskSchema)], CreateTaskHandler)

    app.get('/api/tasks', requireUser , getTaskHandler)

    app.put('/api/tasks', [requireUser, validate(updateTaskSchema)], UpdateTaskHandler)

    app.delete('/api/tasks', [requireUser, validate(deleteTaskSchema)], deleteTaskHandler)
}




export default routes