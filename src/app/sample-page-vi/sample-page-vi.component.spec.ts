import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageViComponent } from './sample-page-vi.component';

describe('SamplePageViComponent', () => {
  let component: SamplePageViComponent;
  let fixture: ComponentFixture<SamplePageViComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageViComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplePageViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
