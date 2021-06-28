import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  fetchOperations(){
    return this.http.get<any>(environment.api + '/operations')
  }

  postNewOperation(data){
    return this.http.post(environment.api + '/operations', data).toPromise()
  }

  deleteOperation(id){
    return this.http.delete(environment.api + '/operations/' + id)
  }

  updateOperation(operation){
    return this.http.put(environment.api + '/operations/' + operation.id, operation)
  }
}

