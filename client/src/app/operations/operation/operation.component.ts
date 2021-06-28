import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/core/connection.service';
import { DataSharingService } from 'src/app/core/data-sharing.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  id?;
  type;
  amount;
  concept;
  updating;

  constructor( private connection: ConnectionService,
    private router: Router,
    private dataSharing: DataSharingService ) { }

  ngOnInit(): void {
    let shared = this.dataSharing.getData();
    if(shared){
      this.id = shared.id;
      this.concept = shared.concept;
      this.amount = shared.amount;
      this.type = shared.type;
      this.updating = true;
      this.dataSharing.reset()
    }else{
      this.updating = false;
    }
  }

  newOperation(form){
    return this.connection.postNewOperation(
      {
        'type': form.type,
        'amount': form.amount,
        'concept': form.concept
      }
      ).then(() => this.router.navigate(['']))
  }

  updateOperation(form){
    return this.connection.updateOperation(form).then(()=> this.router.navigate([]))
  }

  handleSubmit(form){
    if(this.updating){
      return this.updateOperation(form)
    }else{
      return this.newOperation(form)
    }
  }


}
