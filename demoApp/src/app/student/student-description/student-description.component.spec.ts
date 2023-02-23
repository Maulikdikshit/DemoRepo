import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDescriptionComponent } from './student-description.component';

describe('StudentDescriptionComponent', () => {
  let component: StudentDescriptionComponent;
  let fixture: ComponentFixture<StudentDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
