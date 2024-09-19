package gm.tasks.Controller;

import gm.tasks.Model.Task;
import gm.tasks.Service.TaskService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
//http://localhost:8080/tasks-app
@RequestMapping("tasks-app")
@CrossOrigin(value = "http://localhost:4200")
public class TaskController {

    private static final Logger logger = LoggerFactory.getLogger(TaskController.class);

    @Autowired
    private TaskService taskService;

    //http://localhost:8080/tasks-app/tasks
    @GetMapping("/tasks")
    public List<Task> getTasks() {
        List<Task> tasks = this.taskService.listTasks();
        logger.info("Obtained tasks:");
        tasks.forEach(task -> logger.info(task.toString()));
        return tasks;
    }

    @PostMapping("/tasks")
    public Task addTask(@RequestBody Task task) {
        logger.info("Added task: " + task);
        return this.taskService.saveTask(task);
    }
}
