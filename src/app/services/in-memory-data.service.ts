import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { exampleModel } from '../models/rxjsdata';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const models = [
      { modelId: 1, modelName: 'Model 1' },
      { modelId: 2, modelName: 'Model 2' },
      { modelId: 3, modelName: 'Model 3' },
      { modelId: 4, modelName: 'Model 4' },
      { modelId: 5, modelName: 'Example 1' },
      { modelId: 6, modelName: 'Example 2' },
      { modelId: 7, modelName: 'Example 3' },
    ];
    return { models };
  }

  genId(models: exampleModel[]): number {
    return models.length > 0
      ? Math.max(...models.map((exampleModel) => exampleModel.modelId)) + 1
      : 0;
  }
}
