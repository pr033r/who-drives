import { Injectable } from '@angular/core';
import { Ride } from '../models/ride.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RideService {
  private rides: Ride[] = [
    new Ride(
      new User('lasak.ad@gmail.com'),
      'Koberice, Slezska 99',
      'Moravska Ostrava 123'
    ),
    new Ride(
      new User('lasak.ad@gmail.com'),
      'Strahovice, Slezska 99',
      'Moravska Ostrava 123'
    ),
    new Ride(
      new User('lasak.ad@gmail.com'),
      'Bolatice, Slezska 99',
      'Moravska Ostrava 123'
    ),
    new Ride(
      new User('lasak.ad@gmail.com'),
      'Chuchelna, Slezska 99',
      'Moravska Ostrava 123'
    ),
    new Ride(
      new User('lasak.ad@gmail.com'),
      'Hnevosice, Slezska 99',
      'Moravska Ostrava 123'
    ),
    new Ride(
      new User('lasak.ad@gmail.com'),
      'Kravare, Slezska 99',
      'Moravska Ostrava 123'
    ),
    new Ride(
      new User('lasak.ad@gmail.com'),
      'Sluzovice, Slezska 99',
      'Moravska Ostrava 123'
    ),
    new Ride(
      new User('lasak.ad@gmail.com'),
      'Oldrisov, Slezska 99',
      'Moravska Ostrava 123'
    ),
  ];

  getRides() {
    return this.rides.slice();
  }

  constructor() {}
}
