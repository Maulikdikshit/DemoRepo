import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      multi:true,
      useExisting:forwardRef(() => InputComponentComponent)
      // useExisting:InputComponentComponent
    },
  //   {
  //     provide:NG_VALIDATORS,
  //     useExisting:InputComponentComponent,
  //     multi:true
  //   }
  ]
})
// ControlValueAccessor
// ValidatorValidator
export class InputComponentComponent implements OnInit,ControlValueAccessor  {

  // @ViewChild('input')  input!: ElementRef;
  disabled: any;

  // @Input() setValue = '';
  @Input() type = 'text';
  @Input() isRequired: boolean = false;
  @Input() pattern: string = "null";
  @Input() label: string = "null";
  @Input() placeholder!: string;
  @Input() errorMsg!: string;

  assVal = '';

  constructor() { }



  ngOnInit(): void {
    // this.setValue = 'KARNS';
  }

  // validate(control: AbstractControl): ValidationErrors | null {
  //   // throw new Error('Method not implemented.');
  //   const validators:ValidatorFn[] = [];
  //   if(this.isRequired){
  //     validators.push(Validators.required)
  //   }
  //   if(this.pattern){
  //     validators.push(Validators.pattern(this.pattern));
  //   }
  //   return validators;

  // }


  onChange = (_:any) => {}

  onTouch = (_:any) => {}

  writeValue(value: any): void {
    console.log('writeValue',value);
    this.assVal = value;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onInputChange($event:any){
    this.onChange($event.target.value);
  }

  // onChange(event: any) {
  //   console.log('event',event.target.value);
  //   this.value = event.target.value;
  //  }




  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }



  onTouched() { }

}
