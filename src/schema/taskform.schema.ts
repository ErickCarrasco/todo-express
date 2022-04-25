import { object, number, string, TypeOf } from "zod";

export const createNewTaskSchema = object({
    body: object({
        task:string({
            required_error: 'Task is required to create a task'
        })
    })
})

export const params = object({
    params: object({
        task: string({
            required_error: 'Search a task'
        })
    })
})





export type createNewTaskInput = TypeOf<typeof createNewTaskSchema>
