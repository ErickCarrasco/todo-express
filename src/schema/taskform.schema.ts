import { object, number, string, TypeOf, boolean } from "zod";

export const createNewTaskSchema = object({
    body: object({
        task:string({
            required_error: 'Task is required to create a task'
        })
    })
})

const body = object({
    
})

const params = object({
    params: object({
        isChecked: boolean({
            required_error: 'error on the system'
        })
    })
})


export const updateTask = object({
    params
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
export type updateTaskInput = TypeOf<typeof updateTask>
export type deleteTaskInput = TypeOf<typeof deleteTaskSchema>
export type getTaskInput = TypeOf<typeof getTaskSchema>

