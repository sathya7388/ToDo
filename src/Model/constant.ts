export interface IToDoData {
    todoId: number,
    title: string,
    createdDate: string,
    updatedDate: string,
    userId: string,
    pinned: boolean 
    toDoTaskList: ITask[]
}

export interface ITask {
    taskId: number,
    content: string,
    createdDate: string,
    updatedDate: string,
    orderId: number,
    checked: boolean
}


export const InitTask : ITask = {
    taskId: 0,
    content: '',
    createdDate: '',
    updatedDate: '',
    orderId: 0,
    checked: false
}

export const InitToDoData: IToDoData = {
    todoId: 0,
    title: '',
    createdDate: '',
    updatedDate: '',
    userId: '',
    pinned: false,
    toDoTaskList: [InitTask]
}
