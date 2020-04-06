export type TDate = number | Date;

export type TFormErrors = { [key: string]: string } | {};

export interface ITask {
  title?: string;
  author?: string;
  date?: TDate | string;
  priority?: string;
  status?: string;
}
