import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CHARACTERS } from './characters';
import { CharResponse } from './charResponse';

@Injectable({
  providedIn: 'root'
})
export class RickNmortyService {
  response: any = JSON.parse(CHARACTERS);
  constructor() { }

  getAllCharacters(): Observable<CharResponse> {
    return new Observable((obs) => {
      setTimeout(() => {
        obs.next(this.response as CharResponse);
      }, 1000);
    });
  }
}
