import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminchildComponent } from './adminchild.component';

describe('AdminchildComponent', () => {
  let component: AdminchildComponent;
  let fixture: ComponentFixture<AdminchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminchildComponent]
    });
    fixture = TestBed.createComponent(AdminchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
