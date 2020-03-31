import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Task } from './task.model';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel('Task') private readonly taskModel: Model<Task>,
  ) { }

  async insertTask(title: string, author: string, date: string, status: string) {
    const newTask = new this.taskModel({
      title,
      author,
      date,
      status,
    });
    const result = await newTask.save();
    return result.id as string;
  }

  async getTasks() {
    const tasks = await this.taskModel.find().exec();
    return tasks.map(task => ({
      id: task.id,
      title: task.title,
      author: task.author,
      date: task.date,
      status: task.status,
    }));
  }
}