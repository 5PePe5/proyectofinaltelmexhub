import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {post} from './proyectos/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) {

console.log("console funcionando")
   }
   getData(){
     return this.httpclient.get<post[]>('http://localhost:3000/proyectos')


   }

}
