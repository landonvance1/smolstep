import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoTaskPageComponent } from './do-task-page/do-task-page.component';
import { LandingContentComponent } from './landing-content/landing-content.component';

const routes: Routes = [
  { path: 'doTask/:id', component: DoTaskPageComponent },
  { path: '', component: LandingContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
