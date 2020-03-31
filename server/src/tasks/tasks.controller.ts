import {
  Controller,
  Post,
  Body,
  Get,
} from '@nestjs/common';

import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Post()
  async addTask(
    @Body('title') taskTitle: string,
    @Body('author') taskAuthor: string,
    @Body('date') taskDate: string,
    @Body('status') taskStatus: string,
  ) {
    const generatedId = await this.tasksService.insertTask(
      taskTitle,
      taskAuthor,
      taskDate,
      taskStatus,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllTasks() {
    const tasks = await this.tasksService.getTasks();
    return tasks;
  }
}