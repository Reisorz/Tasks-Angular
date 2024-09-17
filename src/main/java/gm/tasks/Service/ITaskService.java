package gm.tasks.Service;

import gm.tasks.Model.Task;

import java.util.List;

public interface ITaskService {
    public List<gm.tasks.Model.Task> listTasks();

    public Task searchTaskById(Integer taskId);

    public List<Task> searchTaskByName (String taskName);

    public void saveTask(Task task);

    public void deleteTask(Task task);


}
