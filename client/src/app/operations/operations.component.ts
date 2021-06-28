import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../core/connection.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  list;
  balance;

  constructor(private con: ConnectionService,
    private router: Router) { }

  ngOnInit(): void {
    this.getOperations();
  }

  getOperations(){
    this.con.fetchOperations().subscribe((data)=> {
      this.list = data;
      this.balance = this.getBalance()
    })
  }
  getBalance(){
    let balance = 0;
    this.list.forEach(operation =>{
        if(operation.type == true){
          balance += operation.amount;
        }else{
          balance -= operation.amount;
        }
    })
    return balance;
  }

  deleteOperation(id){
    this.con.deleteOperation(id).subscribe(()=> this.getOperations(), err => console.log(err))
    this.getOperations()
  }

  editOperation(id){
    this.router.navigate([`/edit/${id}`])
  }
}
