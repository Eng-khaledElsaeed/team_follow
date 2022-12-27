import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageViiComponent } from './sample-page-vii.component';

describe('SamplePageViiComponent', () => {
  let component: SamplePageViiComponent;
  let fixture: ComponentFixture<SamplePageViiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageViiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePageViiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
