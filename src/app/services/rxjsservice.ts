import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MODELS } from '../models/mockModels';
import { exampleModel } from '../models/rxjsdata';

@Injectable({ providedIn: 'root' })
export class rxjsService {
  private models$: BehaviorSubject<exampleModel[]> = new BehaviorSubject<
    exampleModel[]
  >(MODELS);

  constructor(private http: HttpClient) {}

  getModels() {
    return this.models$;
  }
}
