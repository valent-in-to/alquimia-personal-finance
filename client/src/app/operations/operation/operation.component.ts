import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ConnectionService } from 'src/app/core/connection.service';
import { Operation } from 'src/app/core/operation';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  type;
  amount;
  concept;

  constructor( private connection: ConnectionService ) { }

  ngOnInit(): void {
  }

  newOperation(){
    return this.connection.postNewOperation(
      {
        'type': this.type,
        'amount': this.amount,
        'concept': this.concept
      }
      ).then(x => console.log(x), err => console.log(err))
  }

}
