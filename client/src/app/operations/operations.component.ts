import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../core/connection.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  list;

  constructor(private con: ConnectionService) { }

  ngOnInit(): void {
    this.getOperations();
  }

  getOperations(){
    this.con.fetchOperations().subscribe((data)=> {
      this.list = data;
    })
  }
  /* getBalance(){
    return this.list.
  } */

  deleteOperation(id){
    this.con.deleteOperation(id).subscribe(()=> this.getOperations(), err => console.log(err))
    this.getOperations()
  }
}
