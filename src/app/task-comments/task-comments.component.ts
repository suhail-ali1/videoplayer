import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-comments',
  templateUrl: './task-comments.component.html',
  styleUrls: ['./task-comments.component.css']
})
export class TaskCommentsComponent {


  taskId !: any;
  task: any;
  video !: string;
  apiLoaded = false;
  startSeconds !: number;
   endSeconds !: number;


  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(params => {
      this.taskId = params.get('id');
      this.task = this.taskService.getTaskById(this.taskId);
      this.video = this.task.video ;
      this.startSeconds = this.task.startsecond;
      this.endSeconds = this.task.endsecond;

      if (!this.apiLoaded) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        this.apiLoaded = true;
      }

    });
  }



  








}
