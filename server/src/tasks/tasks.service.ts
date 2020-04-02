import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Task } from './task.model';
import { TaskDto } from './task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel('Task') private readonly taskModel: Model<Task>,
  ) { }

  async createTask(newTask: TaskDto): Promise<Task> {
    return await new this.taskModel(newTask).save();
  }

  async getTasks(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }

  async getSingleTask(_id: string): Promise<Task> {
    const checkedTask = await this.findTask(_id);
    return await this.taskModel.findById(_id);
  }

  async updateTask(_id: string, updateTask: TaskDto): Promise<Task> {
    const checkedTask = await this.findTask(_id);
    return await this.taskModel.findByIdAndUpdate(_id, updateTask);
  }

  async removeById(_id: string): Promise<Task> {
    const checkedTask = await this.findTask(_id);
    return await this.taskModel.findByIdAndRemove(_id);
  }

  private async findTask(_id: string): Promise<Task> {
    let task;
    try {
      task = await this.taskModel.findById(_id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find task.');
    }
    if (!task) {
      throw new NotFoundException('Could not find task.');
    }
    return task;
  }
}