import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  status: { type: String, required: true },
});

export interface Task extends mongoose.Document {
  id: string;
  title: string;
  author: string;
  date: string;
  status: string;
}