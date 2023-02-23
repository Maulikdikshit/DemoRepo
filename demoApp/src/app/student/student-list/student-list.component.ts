import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  displayedColumns!: string[];
  dataSource: any;
  constructor(private studentService:StudentService,private router:Router,private  route:ActivatedRoute) { }

  ngOnInit(): void {
    this.displayedColumns = ['position', 'name','bloodGroup','branch','rollNo'];

    this.studentService.getStudentInfo().subscribe((data) => {
      console.log('student data',data);
      this.dataSource = data.students;
    })
  }

  clickedRow($event:any){
    console.log('student list event received',$event);
    this.router.navigate(['studentInfo'],{ relativeTo: this.route });

  }

}
