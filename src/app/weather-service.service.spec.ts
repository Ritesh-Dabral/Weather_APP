import { TestBed } from '@angular/core/testing';

import { WeatherSERVICEService } from './weather-service.service';

describe('WeatherSERVICEService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherSERVICEService = TestBed.get(WeatherSERVICEService);
    expect(service).toBeTruthy();
  });
});
