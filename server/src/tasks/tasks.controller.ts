import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { TaskDto } from './task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Post()
  async addTask(
    @Body() newTask: TaskDto
  ) {
    return await this.tasksService.createTask(newTask);
  }

  @Get()
  async getAllTasks() {
    return await this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') _id: string) {
    return this.tasksService.getSingleTask(_id);
  }

  @Patch(':id')
  async updateTask(
    @Param('id') _id: string,
    @Body() updateTask: TaskDto) {
    await this.tasksService.updateTask(_id, updateTask);
    return null;
  }
}