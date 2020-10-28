import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/domain/student';
import { StudentService } from 'src/app/service/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {

  public students: Student[];
  public subStudents: Subscription;

  constructor(public studentService: StudentService) { }

  ngOnDestroy(): void {
    this.subStudents.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }


  public getAll() {
    this.subStudents = this.studentService.getAll().subscribe(data => {
      this.students = data;
    });
  }

}