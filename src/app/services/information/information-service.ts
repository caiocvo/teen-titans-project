import { Injectable } from '@angular/core';
import { Character } from '../../models/character';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class InformationService {
  private api = 'http://localhost:3001/';

  constructor(private http: HttpClient) {}

  getCharById(id: number) {
    return this.http.get<Character>(`${this.api}char/${id}`);
  }
  getChars() {
    return this.http.get<Character[]>(`${this.api}char`);
  }
}
