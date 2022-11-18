import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsformComponent } from './parentsform.component';

describe('ParentsformComponent', () => {
  let component: ParentsformComponent;
  let fixture: ComponentFixture<ParentsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentsformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
