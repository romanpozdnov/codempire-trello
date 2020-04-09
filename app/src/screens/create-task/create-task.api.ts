import { postData, changeData, deleteData } from "../../services/api/api-service";

export const createTask = (payload: any) => {
  const URL = "/tasks";
  return postData(URL, payload);
};

export const updateTask = (_id: string, payload: any) => {
  const URL = `/tasks/${_id}`;
  return changeData(URL, payload);
};

export const deleteTask = (_id: string) => {
  const URL = `/tasks/${_id}`;
  return deleteData(URL);
};

