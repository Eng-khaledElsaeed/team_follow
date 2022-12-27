import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageIiiComponent } from './sample-page-iii.component';

describe('SamplePageIiiComponent', () => {
  let component: SamplePageIiiComponent;
  let fixture: ComponentFixture<SamplePageIiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageIiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePageIiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
