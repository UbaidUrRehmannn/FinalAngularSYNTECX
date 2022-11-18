import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathstudentsComponent } from './mathstudents.component';

describe('MathstudentsComponent', () => {
  let component: MathstudentsComponent;
  let fixture: ComponentFixture<MathstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathstudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
