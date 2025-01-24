export interface ITask {
    TaskName?: string;
    TaskDescription?: string;
    TaskPriority?: Priority;
    TaskDeadline?: string;
    TaskDone?: "Done" | "Not done" | "In progress";
}

export enum Priority {
    Low = 'low',
    Medium = 'medium',
    High = 'high'
}
