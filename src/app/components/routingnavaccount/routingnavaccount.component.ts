import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routingnavaccount',
  templateUrl: './routingnavaccount.component.html',
  styleUrls: ['./routingnavaccount.component.scss'],
})
export class RoutingnavaccountComponent implements OnInit {
  id?: number;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
    });
  }
}
