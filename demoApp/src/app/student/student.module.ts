import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import {  RouterModule, Routes } from "@angular/router";
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from "./student.service";
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { StudentDescriptionComponent } from './student-description/student-description.component';
import { StuPersonalDescComponent } from './stu-personal-desc/stu-personal-desc.component';
import { StudentPersonalDescService } from "./stu-personal-desc/stu-personal-desc.service";



const studentRoutes:Routes = [
    {path:'',component:StudentListComponent},
    {path:'studentInfo',component:StudentDescriptionComponent}
]


@NgModule({

    imports:[
        MatTableModule ,
        ReactiveFormsModule,
        RouterModule.forChild(studentRoutes),
        HttpClientModule,
        CommonModule ,
        SharedModule,
        FormsModule
    ],
    declarations:[
    StudentListComponent,
    StudentDescriptionComponent,
    StuPersonalDescComponent
  ],
    exports:[RouterModule],
    providers:[StudentService,StudentPersonalDescService]
})
export class StudentModule{}