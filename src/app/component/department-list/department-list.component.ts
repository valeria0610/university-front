import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/domain/department';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit, OnDestroy {

  public departments: Department[];
  public subDepartments: Subscription;

  constructor(public departmentService: DepartmentService) { }

  ngOnDestroy(): void {
    this.subDepartments.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }


  public getAll() {
    this.subDepartments = this.departmentService.getAll().subscribe(data => {
      this.departments = data;
    });
  }

}


