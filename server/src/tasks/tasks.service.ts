import { Injectable, NotFoundException } from '@nestjs/common';
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
    return tasks;
  }

  async getSingleTask(taskId: string) {
    const task = await this.findTask(taskId);
    return {
      id: task.id,
      title: task.title,
      author: task.author,
      date: task.date,
      status: task.status,
    };
  }

  async updateTask(
    taskId: string,
    title: string,
    author: string,
    date: string,
    status: string,
  ) {
    const updatedTask = await this.findTask(taskId);
    if (title) {
      updatedTask.title = title;
    }
    if (author) {
      updatedTask.author = author;
    }
    if (date) {
      updatedTask.date = date;
    }
    if (status) {
      updatedTask.status = status;
    }
    updatedTask.save();
  }

  private async findTask(id: string): Promise<Task> {
    let task;
    try {
      task = await this.taskModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find task.');
    }
    if (!task) {
      throw new NotFoundException('Could not find task.');
    }
    return task;
  }
}