import { Injectable } from '@angular/core';
import { Task } from './model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }


  private tasks: Task[] = [
    { id: 'JAWAN', video: 'AQEc4BwX6dk' , title: 'Jawan Movie SONG', description: 'Amazing SONG' , startsecond : 151 ,
     endsecond : 190 } ,
     { id: 'MrIndiaMovie', video: '6db52BxXxfQ' , title: 'Mr India 1987 SONG', description: 'Amazing SONG' , startsecond : 48 ,
     endsecond : 190 },
     { id: 'Cricket World Cup 2011 Song', video: 'nsXSmALexGc' , title: 'Cricket World Cup 2011 Song', description: 'Amazing SONG' , startsecond : 26 ,
     endsecond : 190 }
     
  ];


  private tamiltasks: Task[] = [
    { id: 'JAWAN', video: 'zzFoyI-6zQ4' , title: 'Jawan Movie SONG', description: 'Amazing SONG' , startsecond : 151 ,
     endsecond : 190 } ,
     { id: 'MrIndiaMovie', video: '6db52BxXxfQ' , title: 'Mr India 1987 SONG', description: 'Amazing SONG' , startsecond : 48 ,
     endsecond : 190 },
     { id: 'Cricket World Cup 2011 Song', video: 'nsXSmALexGc' , title: 'Cricket World Cup 2011 Song', description: 'Amazing SONG' , startsecond : 26 ,
     endsecond : 190 }
     
  ];



  tamilgetTaskById(id: any): Task | undefined {
    return this.tamiltasks.find(tamiltask => tamiltask.id === id);
  }



  getTaskById(id: any): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

}
