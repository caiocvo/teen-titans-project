import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterStateService {
  private idActual = new BehaviorSubject<number>(2);
  private colorActual = new BehaviorSubject<string>('#5D0000');

  idActual$ = this.idActual.asObservable();
  colorActual$ = this.colorActual.asObservable();

  setPersonagem(index: number, color: string) {
    this.idActual.next(index);
    this.colorActual.next(color);
  }
}
