import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageIiComponent } from './sample-page-ii.component';

describe('SamplePageIiComponent', () => {
  let component: SamplePageIiComponent;
  let fixture: ComponentFixture<SamplePageIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageIiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePageIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
