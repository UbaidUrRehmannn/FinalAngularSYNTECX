import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiostudentsComponent } from './biostudents.component';

describe('BiostudentsComponent', () => {
  let component: BiostudentsComponent;
  let fixture: ComponentFixture<BiostudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiostudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiostudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
