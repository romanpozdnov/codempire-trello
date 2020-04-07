export type TDate = number | Date;

export type TFormErrors = { [key: string]: string } | {};

export interface ITask {
  _id?: string;
  title?: string;
  author?: string;
  date?: TDate | string;
  priority?: string;
  status?: string;
}
