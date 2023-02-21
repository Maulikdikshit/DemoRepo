import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const appRoutes:Routes = [
    {path:'',component:LandingPageComponent},
    {path:'home',component:HomeComponent},
    {path:'login',loadChildren:() => import('./auth/auth.module').then(m=>m.AuthModule)},
    {path:'student',loadChildren:() => import('./student/student.module').then(m=>m.StudentModule)}
  ];


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    declarations:[],
    exports:[RouterModule]
})
export class AppRoutingModule{}