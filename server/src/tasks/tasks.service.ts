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

  async createTask(newTask: TaskDto) {
    return await new this.taskModel(newTask).save();
  }

  async getTasks() {
    return await this.taskModel.find().exec();
  }

  async getSingleTask(_id: string) {
    return await this.taskModel.findById(_id);
  }

  async updateTask(_id: string, updateTask: TaskDto) {
    return await this.taskModel.findByIdAndUpdate(_id, updateTask);
  }
}