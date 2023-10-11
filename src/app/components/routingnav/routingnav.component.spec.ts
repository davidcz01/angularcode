import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RoutingnavComponent } from './routingnav.component';

describe('RoutingnavComponent', () => {
  let component: RoutingnavComponent;
  let fixture: ComponentFixture<RoutingnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingnavComponent],
      imports: [RouterModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(RoutingnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
