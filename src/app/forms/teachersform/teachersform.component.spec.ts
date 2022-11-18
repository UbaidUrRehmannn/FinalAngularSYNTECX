import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersformComponent } from './teachersform.component';

describe('TeachersformComponent', () => {
  let component: TeachersformComponent;
  let fixture: ComponentFixture<TeachersformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
