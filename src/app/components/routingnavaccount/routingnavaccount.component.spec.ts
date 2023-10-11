import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { RoutingnavaccountComponent } from './routingnavaccount.component';

describe('RoutingnavaccountComponent', () => {
  let component: RoutingnavaccountComponent;
  let fixture: ComponentFixture<RoutingnavaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingnavaccountComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(RoutingnavaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
