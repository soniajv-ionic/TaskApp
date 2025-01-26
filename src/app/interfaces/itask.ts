export interface ITask {
  name?: string;
  description?: string;
  priority?: Priority;
  deadline?: string;
  done?: 'Done' | 'Not done' | 'In progress';
}

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}
