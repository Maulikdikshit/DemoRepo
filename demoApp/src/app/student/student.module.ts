import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {  RouterModule, Routes } from "@angular/router";
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from "./student.service";
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";



const studentRoutes:Routes = [
    {path:'',component:StudentListComponent}
]


@NgModule({

    imports:[
        MatTableModule ,
        ReactiveFormsModule,
        RouterModule.forChild(studentRoutes),
        HttpClientModule,
        CommonModule ,
        SharedModule
    ],
    declarations:[
    StudentListComponent
  ],
    exports:[RouterModule],
    providers:[StudentService]
})
export class StudentModule{}