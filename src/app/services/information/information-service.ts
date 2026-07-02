import { Injectable } from '@angular/core';
import { Character } from '../../models/character';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class InformationService {
  private api = 'http://localhost:3000/char';

  constructor(private http: HttpClient) {}

  getCharById(id: number) {
    return this.http.get<Character>(`${this.api}/${id}`);
  }
  //Don't need it
  getChars() {
    return this.http.get<Character[]>(`${this.api}`);
  }
}
