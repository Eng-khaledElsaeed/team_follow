import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageIvComponent } from './sample-page-iv.component';

describe('SamplePageIvComponent', () => {
  let component: SamplePageIvComponent;
  let fixture: ComponentFixture<SamplePageIvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageIvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePageIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
