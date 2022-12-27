import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageIComponent } from './sample-page-i.component';

describe('SamplePageIComponent', () => {
  let component: SamplePageIComponent;
  let fixture: ComponentFixture<SamplePageIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePageIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
