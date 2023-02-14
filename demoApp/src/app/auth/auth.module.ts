import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {  RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";


const authRoutes:Routes = [
    {path:'',component:LoginComponent}
]


@NgModule({

    imports:[RouterModule.forChild(authRoutes),ReactiveFormsModule],
    declarations:[LoginComponent],
    exports:[RouterModule]
})
export class AuthModule{}