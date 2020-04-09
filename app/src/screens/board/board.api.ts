import { fetchData } from "../../services/api/api-service";

export const getAllTasks = () => {
  const URL = "/tasks";
  return fetchData(URL);
}