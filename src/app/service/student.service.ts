import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../domain/student';
import {environment} from 'src/environments/environment';

//injetable para ser consumido para utilizarlo

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public url: string;


  constructor(public httpClient: HttpClient) { 
    //this.url = 'http://localhost/University.API/api/Courses/'
   
    this.url =environment.apiUrl +'Student/';
  }

  public getAll(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get(this.url + id);
  }

  public save(student: Student): Observable<any>{
    return this.httpClient.post(this.url, student);
  }

  public edit(student: Student){
    return this.httpClient.put(this.url + student.ID, student);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.url + id);
  }

}