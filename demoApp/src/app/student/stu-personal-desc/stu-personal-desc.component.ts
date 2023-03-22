import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StudentPersonalDescService } from './stu-personal-desc.service';

@Component({
  selector: 'app-stu-personal-desc',
  templateUrl: './stu-personal-desc.component.html',
  styleUrls: ['./stu-personal-desc.component.scss']
})
export class StuPersonalDescComponent implements OnInit {


  personalDescForm!:FormGroup;
  // studentDescValues!:any;
  studentName: any;

  constructor(private fb:FormBuilder,private stuDescService:StudentPersonalDescService) { }

  callTheSvc(){
    this.formCreate();
    this.stuDescService.getStudentPersonalDesc().subscribe((data:any) => {
      console.log('stuDescService',data.studentDesc);
  

      // this.studentDescValues = data.studentDesc;
      this.studentName = data.studentDesc;
      this.personalDescForm.get('name')?.setValue(this.studentName.name);
      this.personalDescForm.get('age')?.setValue(this.studentName.age);
      this.personalDescForm.get('mobNum')?.setValue(this.studentName.mobile);
      this.personalDescForm.get('emailId')?.setValue(this.studentName.emailId);
      this.personalDescForm.get('bloodGroup')?.setValue(this.studentName.bloodGroup);
      

    })
  }

  formCreate(){
    this.personalDescForm = this.fb.group({
      'name':new FormControl(),
      'age':new FormControl(25),
      'bloodGroup':new FormControl(),
      'emailId':new FormControl(),
      'mobNum':new FormControl()

    });
  }

  ngOnInit(): void {

    this.callTheSvc();


    // this.personalDescForm.controls['age'].setValue(25);
    // console.log('this.personalDescForm',this.personalDescForm.controls['age'].value);

    // this.personalDescForm.controls.name.setValue('Masas');

    
  }

  onInput($event:any){

    console.log($event.target.value);

  }
  onSubmit(para:any){
    console.log('parameter',para);
    this.personalDescForm.get('name')?.setValue('Mark');
  }

}
