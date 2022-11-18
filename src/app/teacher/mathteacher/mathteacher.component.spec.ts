import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathteacherComponent } from './mathteacher.component';

describe('MathteacherComponent', () => {
  let component: MathteacherComponent;
  let fixture: ComponentFixture<MathteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathteacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
