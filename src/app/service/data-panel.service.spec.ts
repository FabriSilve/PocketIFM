import { TestBed, inject } from '@angular/core/testing';

import { DataPanelService } from './data-panel.service';

describe('DataPanelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataPanelService]
    });
  });

  it('should be created', inject([DataPanelService], (service: DataPanelService) => {
    expect(service).toBeTruthy();
  }));
});
