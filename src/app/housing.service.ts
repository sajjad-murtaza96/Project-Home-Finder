import { Injectable } from '@angular/core';
import {
  type HousingLocationInfo,
  getHousingLocationList,
} from './housing-location';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Housing {
  readonly baseUrl =
    environment.assetUrl ||
    'https://angular.dev/assets/images/tutorials/common';
  readonly housingLocationList: HousingLocationInfo[] = getHousingLocationList(
    this.baseUrl
  );

  getAllHousingLocations(): HousingLocationInfo[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocationInfo | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`
      Homes Application Received ${firstName}, ${lastName}, ${email}`);
  }

  filterHousingLocationByCity(text: string | null): HousingLocationInfo[] {
    if (!text) {
      return [];
    }
    return this.housingLocationList.filter((housingLocation) =>
      housingLocation.city.toLowerCase().startsWith(text.toLowerCase())
    );
  }
}
