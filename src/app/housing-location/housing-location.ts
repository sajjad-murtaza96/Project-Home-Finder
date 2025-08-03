import { Component, input } from '@angular/core';
import type { HousingLocationInfo } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.scss'
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
