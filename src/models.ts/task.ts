export interface Task {
    dueDate: string,
    category : string,
    title: string,
    description: string,
    completed?: boolean;
}

export type TaskCategory = 'to-do' | 'completed' | 'upcoming';