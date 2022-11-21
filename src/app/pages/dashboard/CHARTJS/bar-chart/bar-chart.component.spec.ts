import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartComponentCJS } from './bar-chart.component';

describe('BarChartComponent', () => {
  let component: BarChartComponentCJS;
  let fixture: ComponentFixture<BarChartComponentCJS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartComponentCJS ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartComponentCJS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
