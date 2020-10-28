import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/domain/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  public id: number;

  public student: Student;
  
  public showMsg: boolean = false;
  public msg: string;
  public type: string;



  constructor(public studentService: StudentService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }


  public getById(){

    let param = this.activatedRoute.params['_value'];
    this.id = param.id;

    this.studentService.getById(this.id).subscribe(data =>{
      this.student=data;
    });
  }

  public delete(){
    console.log(this.student);

    this.studentService.delete(this.student.ID).subscribe(data => {
      this.router.navigate(['/student-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'Ha ocurrido un error';
      this.type= 'danger'
    });
  }
}
