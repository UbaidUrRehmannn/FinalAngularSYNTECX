import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioteacherComponent } from './bioteacher.component';

describe('BioteacherComponent', () => {
  let component: BioteacherComponent;
  let fixture: ComponentFixture<BioteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioteacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
