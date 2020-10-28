import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from '../domain/instructor';
import {environment} from 'src/environments/environment';

//injetable para ser consumido para utilizarlo

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  public url: string;


  constructor(public httpClient: HttpClient) { 
    //this.url = 'http://localhost/University.API/api/Courses/'
   
    this.url =environment.apiUrl +'Instructor/';
  }

  public getAll(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get(this.url + id);
  }

  public save(instructor: Instructor): Observable<any>{
    return this.httpClient.post(this.url, instructor);
  }

  public edit(instructor: Instructor){
    return this.httpClient.put(this.url + instructor.ID, instructor);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.url + id);
  }

}
