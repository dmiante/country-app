import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCapitalPageComponent } from './by-capital-page.component';

describe('ByCapitalPageComponent', () => {
  let component: ByCapitalPageComponent;
  let fixture: ComponentFixture<ByCapitalPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByCapitalPageComponent]
    });
    fixture = TestBed.createComponent(ByCapitalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
