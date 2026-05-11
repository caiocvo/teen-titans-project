import { Injectable } from '@angular/core';
import { Character } from '../../models/character';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class InformationService {
  private api = 'https://teen-titans-project.onrender.com/char';

  constructor(private http: HttpClient) {}

  getCharById(id: number) {
    return this.http.get<Character>(`${this.api}/${id}`);
  }
  getChars() {
    return this.http.get<Character[]>(`${this.api}`);
  }
}
