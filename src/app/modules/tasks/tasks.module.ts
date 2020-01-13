import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GeneralComponent } from './pages/general/general.component';
import { SelfComponent } from './pages/self/self.component';
import { TeamComponent } from './pages/team/team.component';
import { TasksRoutingModule } from './tasks-routing.module';


@NgModule({
  declarations: [
    SelfComponent,
    TeamComponent,
    GeneralComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
