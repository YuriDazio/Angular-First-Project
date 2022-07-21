import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor() {}

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Yuri',
        lastName: 'Dazio',
        age: 30
      },
      {
        firstName: 'Godofredo',
        lastName: 'Silva',
        age: 35
      },
      {
        firstName: 'Fabio',
        lastName: 'Junior',
        age: 98
      },
      {
        firstName: 'Zezé',
        lastName: 'de Camargo',
        age: 56
      },
    ]

    return of(peopleArray)
  }
}
