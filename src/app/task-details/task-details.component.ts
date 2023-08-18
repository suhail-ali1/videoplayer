import { Component } from '@angular/core';
import { Task } from '../model/task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {

  taskId !: any ;
  task !: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.taskId = params.get('id');
      this.task = this.taskService.getTaskById(this.taskId);
    });
  }

  totamil()
  {
    this.router.navigate(['comments/tamil'] , { relativeTo: this.route} )
  }

}
