import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {
  private urlBack: string = "http://127.0.0.1:8000/";

  constructor() {
  }


  getAllCategory() {
    return fetch(`${this.urlBack}api/categories`)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => console.error('Error:', error));
  }

  getAllProducts() {
    return fetch(`${this.urlBack}api/products`)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => console.error('Error:', error));
  }

  getProductById(id: number) {
    return fetch(`${this.urlBack}api/products/${id}`)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => console.error('Error:', error));
  }


  authenticate(email: string, password: string) {
    const loginData = {
      email: email,
      password: password
    };

    return fetch(`${this.urlBack}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then(response => response.json())
      .then(token => {
        localStorage.setItem('token', token.token)
        return token;
      })
      .catch(error => console.error('Error:', error));
  }

}
