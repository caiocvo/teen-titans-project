import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterStateService {
  private idActual = new BehaviorSubject<number>(2);
  idActual$ = this.idActual.asObservable();

  setPersonagem(index: number) {
    this.idActual.next(index);
  }
}
