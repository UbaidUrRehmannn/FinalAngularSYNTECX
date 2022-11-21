import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartComponentCJS } from './line-chart.component';

describe('LineChartComponent', () => {
  let component: LineChartComponentCJS;
  let fixture: ComponentFixture<LineChartComponentCJS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartComponentCJS ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartComponentCJS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
