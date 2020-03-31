import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
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

  @Get(':id')
  getTask(@Param('id') taskId: string) {
    return this.tasksService.getSingleTask(taskId);
  }

  @Patch(':id')
  async updateTask(
    @Param('id') taskId: string,
    @Body('title') taskTitle: string,
    @Body('author') taskAuthor: string,
    @Body('date') taskDate: string,
    @Body('status') taskStatus: string,
  ) {
    await this.tasksService.updateTask(taskId, taskTitle, taskAuthor, taskDate, taskStatus);
    return null;
  }
}