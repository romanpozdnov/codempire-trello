import { IsNotEmpty } from 'class-validator';
export class TaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  priority: string;
}