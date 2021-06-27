import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/core/connection.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  type;
  amount;
  concept;

  constructor( private connection: ConnectionService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  newOperation(){
    return this.connection.postNewOperation(
      {
        'type': this.type,
        'amount': this.amount,
        'concept': this.concept
      }
      ).then(() => this.router.navigate([]))
  }


}
