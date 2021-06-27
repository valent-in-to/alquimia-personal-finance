import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationComponent } from './operations/operation/operation.component';
import { OperationsComponent } from './operations/operations.component';

const routes: Routes = [
  {
    path: '', component: OperationsComponent
  },
  {
    path: 'new', component: OperationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
