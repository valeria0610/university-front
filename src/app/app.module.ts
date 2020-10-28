import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CourseService } from './service/course.service';
import { CourseSaveComponent } from './component/course-save/course-save.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { from } from 'rxjs';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { DepartmentSaveComponent } from './component/department-save/department-save.component';
import { DepartmentDeleteComponent } from './component/department-delete/department-delete.component';
import { DepartmentEditComponent } from './component/department-edit/department-edit.component';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { InstructorSaveComponent } from './component/instructor-save/instructor-save.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentSaveComponent } from './component/student-save/student-save.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseSaveComponent,
    CourseEditComponent,
    CourseDeleteComponent, 
    DepartmentSaveComponent,
    DepartmentDeleteComponent,
    DepartmentEditComponent,
    DepartmentListComponent,
    InstructorDeleteComponent,
    InstructorEditComponent,
    InstructorListComponent,
    InstructorSaveComponent,
    StudentListComponent,
    StudentDeleteComponent,
    StudentEditComponent,
    StudentSaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
