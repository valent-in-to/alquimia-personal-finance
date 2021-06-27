import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationsComponent } from './operations/operations.component';

const routes: Routes = [
  {
    path: '', component: OperationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
