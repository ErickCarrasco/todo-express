import { object, number, string, TypeOf, boolean } from "zod";

export const createNewTaskSchema = object({
    body: object({
        task:string({
            required_error: 'Task is required to create a task'
        })
    })
})


export const updateTaskSchema = object({
    body: object({
        task:string({
            required_error: 'Task is required'
        })
    })
})

export const deleteTaskSchema = object({
    body: object({
        task:string({
            required_error: 'Task is required'
        })
    })
})

export const getTaskSchema = object({
    body: object({
        task:string({
            required_error: 'Task is required'
        })
    })
})


export type createNewTaskInput = TypeOf<typeof createNewTaskSchema>
export type updateTaskInput = TypeOf<typeof updateTaskSchema>
export type deleteTaskInput = TypeOf<typeof deleteTaskSchema>
export type getTaskInput = TypeOf<typeof getTaskSchema>

