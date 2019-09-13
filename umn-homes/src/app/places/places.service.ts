import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy',
      'https://origin.pegipegi.com/jalan/images/pict1L/Y8/Y953168/Y953168051.jpg',
      100000000
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartemen Romantis',
      'https://www.serpong-garden-apartment.com/wp-content/uploads/sites/47/2019/04/serpong-garden-front-view.original.jpg',
      125000000
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Apartemen Murah',
      'http://1.bp.blogspot.com/-tW_sDjrvzNA/Ueam7BtLbMI/AAAAAAAAAEc/lj1rW3TdaaM/s1600/casa-de-parco-apartment-bsd-city.jpg',
      50000000
    ),
  ];

  get places() {
    return [...this._places];
  }
  constructor() { }

  getPlace(id: string){
    return {...this._places.find(p => p.id === id)};
  }
}
