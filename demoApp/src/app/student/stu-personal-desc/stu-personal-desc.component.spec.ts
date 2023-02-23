import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuPersonalDescComponent } from './stu-personal-desc.component';

describe('StuPersonalDescComponent', () => {
  let component: StuPersonalDescComponent;
  let fixture: ComponentFixture<StuPersonalDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuPersonalDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuPersonalDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
