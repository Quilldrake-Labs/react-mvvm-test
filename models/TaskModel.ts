class TaskModel {

    tasks: string[] = [];
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        if (!this.tasks) {
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
        }
    }

    addTask(task: string) {
        this.tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    getAllTasks() {
        return this.tasks;
    }

}

export default TaskModel;