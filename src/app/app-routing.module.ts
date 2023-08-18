import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskCommentsComponent } from './task-comments/task-comments.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

import { AuthGuard } from './auth.guard';
import { TamilComponent } from './tamil/tamil.component';

const routes: Routes = [
  
  
  {
    path: 'tasks/:id',
    component: TaskDetailsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'comments', pathMatch: 'full' },
      { path: 'comments', component: TaskCommentsComponent },
      { path: 'comments/tamil', component: TamilComponent }
    ]
  },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: '**', redirectTo: 'tasks' }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
