import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getData()
  {
      const url = 'https://jsonplaceholder.typicode.com/todos';
      return this.http.get(url);
  }
  // tslint:disable-next-line:typedef
  getDatas()
  {
    const url = 'https://reqres.in/api/users';
    return this.http.get(url);
  }
}
