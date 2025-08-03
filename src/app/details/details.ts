import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housing } from '../housing.service';
import type { HousingLocationInfo } from '../housing-location';
import { Forms } from '../forms/forms';

@Component({
  selector: 'app-details',
  imports: [Forms],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  route = inject(ActivatedRoute);
  housingService = inject(Housing);
  housingLocation: HousingLocationInfo | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
}
