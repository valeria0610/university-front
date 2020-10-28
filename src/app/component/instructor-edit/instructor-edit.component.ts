import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Instructor } from 'src/app/domain/instructor';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.css']
})
export class InstructorEditComponent implements OnInit {

  public id: number;

  public instructor: Instructor;
  
  public showMsg: boolean = false;
  public msg: string;
  public type: string;



  constructor(public instructorService: InstructorService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }


  public getById(){

    let param = this.activatedRoute.params['_value'];
    this.id = param.id;

    this.instructorService.getById(this.id).subscribe(data =>{
      this.instructor=data;
    });
  }

  public edit(){
    console.log(this.instructor);

    this.instructorService.edit(this.instructor).subscribe(data => {
      this.router.navigate(['/instructor-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'Ha ocurrido un error';
      this.type= 'danger'
    });
  }

}


