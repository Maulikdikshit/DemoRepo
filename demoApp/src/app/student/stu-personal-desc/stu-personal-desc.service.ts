import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class StudentPersonalDescService{
    constructor(private http:HttpClient){}


    getStudentPersonalDesc(){
        return this.http.get('../../../assets/jsonFiles/studentDesc.json');
    }
}