import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 'xyz', 
      placeId: 'p1',
      placeTitle: 'Scientia Apartment',
      guestNumber: 2,
      userId: 'abc'
    },
    {
      id: 'mno', 
      placeId: 'p2',
      placeTitle: 'Flamingo',
      guestNumber: 6,
      userId: 'acc'
    }
  ];

  constructor() { }

  get bookings(){
    return [...this._bookings];
  }
}
