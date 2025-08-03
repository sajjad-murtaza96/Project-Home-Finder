import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { Housing } from '../housing.service';
import type { HousingLocationInfo } from '../housing-location';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [HousingLocation, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss', '../housing-location/housing-location.scss'],
})
export class Home {
  searchControl = new FormControl('');
  housingLocationList: HousingLocationInfo[] = [];
  housingService: Housing = inject(Housing);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.searchControl.valueChanges
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((searchText) => {
        this.filterResults(searchText);
      });
  }
  filterResults(text: string | null) {
    this.housingLocationList =
      this.housingService.filterHousingLocationByCity(text);
  }
}
