package gm.tasks.Controller;

import gm.tasks.Model.Task;
import gm.tasks.Service.TaskService;
import gm.tasks.exceptions.NotFoundExecption;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/tasks/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable int id) {
        Task task = this.taskService.searchTaskById(id);
        if (task != null) {
            return ResponseEntity.ok(task);
        }
        else {
            throw new NotFoundExecption("Could not find the id = " + id);
        }
    }

    @PutMapping ("/tasks/{id}")
    public ResponseEntity<Task> editTask(@PathVariable int id,@RequestBody Task receivedTask) {
        Task task = taskService.searchTaskById(id);
        task.setTaskName(receivedTask.getTaskName());
        task.setResponsiblePerson(receivedTask.getResponsiblePerson());
        task.setStatus(receivedTask.getStatus());
        this.taskService.saveTask(task);
        return ResponseEntity.ok(task);
    }
}
