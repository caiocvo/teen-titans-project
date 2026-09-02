import { Injectable } from '@angular/core';
import { InformationService } from '../information/information-service';
import { map, Observable } from 'rxjs';
import { Ability } from '../../models/ability';

@Injectable({
  providedIn: 'root',
})
export class AbilitiesService {
  constructor(private informationService: InformationService) {}

  getAbilities(id: number): Observable<Ability[]> {
    return this.informationService.getCharById(id).pipe(map((character) => character.abilities));
  }

  /* getAllAbilities() {
    return this.informationService.get;
  } */
}
