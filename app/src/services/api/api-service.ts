import axios from "axios";

import { BASE_URL } from "./api-service.constants";

import { ITask } from "../../constants/types";

const API = axios.create({
  baseURL: BASE_URL,
});

export const getAllTasks = () => {
  return API.get("/tasks");
};

export const createTask = (task: ITask) => {
  API.post("/tasks", task);
};

export const updateTask = (_id: string, task: ITask) => {
  API.patch(`/tasks/${_id}`, task);
};

export const deleteTask = (_id: string) => {
  API.delete(`/tasks/${_id}`);
};
