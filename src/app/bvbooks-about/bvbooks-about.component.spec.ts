import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BvbooksAboutComponent } from './bvbooks-about.component';

describe('BvbooksAboutComponent', () => {
  let component: BvbooksAboutComponent;
  let fixture: ComponentFixture<BvbooksAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BvbooksAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BvbooksAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
