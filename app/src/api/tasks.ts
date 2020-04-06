import API from "./api";

export const getAllTasks = async () => {
  try {
    const data = await API.get("/");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (values) => {
  try {
    const res = await API.post("/", {
      title: values.title,
      author: values.author,
      date: values.date,
      priority: values.priority,
      status: values.status,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (_id, values) => {
  try {
    const res = await API.patch(`/${_id}`, {
      title: values.title,
      author: values.author,
      date: values.date,
      priority: values.priority,
      status: values.status,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (_id) => {
  try {
    const res = await API.delete(`/${_id}`);
  } catch (error) {
    console.log(error);
  }
};
