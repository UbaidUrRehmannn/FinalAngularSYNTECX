import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarareaChartComponent } from './polararea-chart.component';

describe('PolarareaChartComponent', () => {
  let component: PolarareaChartComponent;
  let fixture: ComponentFixture<PolarareaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolarareaChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolarareaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
