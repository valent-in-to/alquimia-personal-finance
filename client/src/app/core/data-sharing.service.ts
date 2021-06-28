import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  data;

  constructor() { }

  writeData(data){
    return this.data = data;
  }

  getData(){
    return this.data;
  }

  reset(){
    return this.data = null;
  }
}
