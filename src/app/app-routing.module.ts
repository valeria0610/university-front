import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseSaveComponent } from './component/course-save/course-save.component';
import { DepartmentDeleteComponent } from './component/department-delete/department-delete.component';
import { DepartmentEditComponent } from './component/department-edit/department-edit.component';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import { DepartmentSaveComponent } from './component/department-save/department-save.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { InstructorSaveComponent } from './component/instructor-save/instructor-save.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentSaveComponent } from './component/student-save/student-save.component';


const routes: Routes = [
  { path: 'course-list', component: CourseListComponent },
  { path: 'course-save', component: CourseSaveComponent },
  { path: 'client-edit/:id', component: CourseEditComponent },
  { path: 'client-delete/:id', component: CourseDeleteComponent },
  { path: 'department-list', component: DepartmentListComponent },
  { path: 'department-save', component: DepartmentSaveComponent },
  { path: 'department-edit/:id', component: DepartmentEditComponent },
  { path: 'department-delete/:id', component: DepartmentDeleteComponent },
  { path: 'instructor-list', component: InstructorListComponent },
  { path: 'instructor-save', component: InstructorSaveComponent },
  { path: 'instructor-edit/:id', component: InstructorEditComponent },
  { path: 'instructor-delete/:id', component: InstructorDeleteComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'student-save', component: StudentSaveComponent },
  { path: 'student-edit/:id', component: StudentEditComponent },
  { path: 'student-delete/:id', component: StudentDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
