import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoTaskPageComponent } from './do-task-page/do-task-page.component';
import { LandingContentComponent } from './landing-content/landing-content.component';
import { AllDonePageComponent } from './all-done-page/all-done-page.component';
import { AddTaskPageComponent } from './add-task-page/add-task-page.component';

const routes: Routes = [
  { path: 'doTask/:id', component: DoTaskPageComponent },
  { path: 'allDone', component: AllDonePageComponent },
  { path: 'addTask', component: AddTaskPageComponent },
  { path: '', component: LandingContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
