import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageVComponent } from './sample-page-v.component';

describe('SamplePageVComponent', () => {
  let component: SamplePageVComponent;
  let fixture: ComponentFixture<SamplePageVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePageVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
