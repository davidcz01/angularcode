import { Component, OnInit } from '@angular/core';
import { filter, map, range, reduce } from 'rxjs';
import { exampleModel } from '../../models/rxjsdata';
import { rxjsService } from '../../services/rxjsservice';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
  models: exampleModel[] = [];

  constructor(private modelList: rxjsService) {}

  ngOnInit(): void {
    this.modelList.getModels().subscribe((models) => (this.models = models));

    mapping.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Sequence complete'),
    });
    filtering.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Filtered greater than 5'),
    });
    reduced.subscribe((total) => console.log('Total = ' + total));
  }
}

const num = range(1, 5);
const mapping = num.pipe(map((i) => 2 * i));
const filtering = mapping.pipe(filter((i) => i > 5));
const needreduced = range(1, 10);

var reduced = needreduced.pipe(reduce((a, b) => a + b, 0));
