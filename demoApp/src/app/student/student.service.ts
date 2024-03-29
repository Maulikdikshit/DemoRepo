import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class StudentService{

    constructor(private http:HttpClient){}

    getStudentInfo():Observable<any>{
        return this.http.get('../../assets/jsonFiles/studentInfo.json');
    }

}