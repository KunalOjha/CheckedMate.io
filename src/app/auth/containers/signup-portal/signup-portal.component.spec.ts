import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPortalComponent } from './signup-portal.component';

describe('SignupPortalComponent', () => {
  let component: SignupPortalComponent;
  let fixture: ComponentFixture<SignupPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
