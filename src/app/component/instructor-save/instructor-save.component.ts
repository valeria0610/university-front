import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/domain/instructor';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-student-save',
  templateUrl: './instructor-save.component.html',
  styleUrls: ['./instructor-save.component.css']
})
export class InstructorSaveComponent implements OnInit {

  public instructor: Instructor;
  public showMsg: boolean = false;
  public msg: string;
  public type: string;

  constructor(public instructorService: InstructorService,
    private router: Router) { }

  ngOnInit(): void {

    this.instructor = new Instructor(0, '','', new Date );

  }

  public save(){
    console.log(this.instructor);

    this.instructorService.save(this.instructor).subscribe(data => {
      this.router.navigate(['/instructor-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'Ha ocurrido un error';
      this.type= 'danger'
    });
  }

}
