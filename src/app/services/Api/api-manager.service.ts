import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {
  private urlBack: string = "http://127.0.0.1:8000/";

  constructor() { }


  getAllCategory(){
    return fetch(`${this.urlBack}api/categories`)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => console.error('Error:', error));
  }

  getAllProducts(){
    return fetch(`${this.urlBack}api/products`)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => console.error('Error:', error));
  }

}
