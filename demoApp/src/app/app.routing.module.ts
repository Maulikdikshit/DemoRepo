import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const appRoutes:Routes = [
    // {path:'',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'',loadChildren:() => import('./auth/auth.module').then(m=>m.AuthModule)},
    {path:'student',loadChildren:() => import('./student/student.module').then(m=>m.StudentModule)}
  ];


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    declarations:[],
    exports:[RouterModule]
})
export class AppRoutingModule{}