import { useState } from "react";
import TaskModel from "@M/TaskModel";

const useTaskViewModel = () => {
    const [taskModel] = useState(() => new TaskModel());
    const addTask = (task: string) => {
        taskModel.addTask(task);
    };

    const getAllTasks = () => {
        return taskModel.getAllTasks();
    };

    return { addTask, getAllTasks };
};

export default useTaskViewModel;