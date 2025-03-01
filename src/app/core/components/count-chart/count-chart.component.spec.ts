import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountChartComponent } from './count-chart.component';

describe('CountChartComponent', () => {
  let component: CountChartComponent;
  let fixture: ComponentFixture<CountChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
