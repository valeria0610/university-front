import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../domain/department';
import {environment} from 'src/environments/environment';

//injetable para ser consumido para utilizarlo

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  public url: string;


  constructor(public httpClient: HttpClient) { 
    //this.url = 'http://localhost/University.API/api/Courses/'
   
    this.url =environment.apiUrl +'Department/';
  }

  public getAll(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get(this.url + id);
  }

  public save(department: Department): Observable<any>{
    return this.httpClient.post(this.url, department);
  }

  public edit(department: Department){
    return this.httpClient.put(this.url + department.DepartmentID, department);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.url + id);
  }

}
