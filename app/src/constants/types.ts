export type TDate = number | Date;

export type TFormErrors = { [key: string]: string } | {};

export interface ITask {
  task?: string;
  user?: string;
  date?: TDate | string;
  priority?: string;
}
