import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSidepanelComponent } from './landing-sidepanel.component';

describe('LandingSidepanelComponent', () => {
  let component: LandingSidepanelComponent;
  let fixture: ComponentFixture<LandingSidepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingSidepanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingSidepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
