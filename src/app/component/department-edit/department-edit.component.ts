import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/domain/department';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  public id: number;

  public department: Department;
  
  public showMsg: boolean = false;
  public msg: string;
  public type: string;



  constructor(public departmentService: DepartmentService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }


  public getById(){

    let param = this.activatedRoute.params['_value'];
    this.id = param.id;

    this.departmentService.getById(this.id).subscribe(data =>{
      this.department=data;
    });
  }

  public edit(){
    console.log(this.department);

    this.departmentService.edit(this.department).subscribe(data => {
      this.router.navigate(['/department-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'Ha ocurrido un error';
      this.type= 'danger'
    });
  }

}
