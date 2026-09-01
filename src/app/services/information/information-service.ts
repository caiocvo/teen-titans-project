import { Injectable } from '@angular/core';
import { Character } from '../../models/character';
import { HttpClient } from '@angular/common/http';
import { first, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class InformationService {
  private readonly api = 'api.json';

  constructor(private http: HttpClient) {}

  /* Usando um json estático, é necessário retornar ele inteiro dentro de um vetor (nesse caso characters),
  na segunda parte da função (map (data)) uma array fuction comum. Usa o método .find mapeando o personagem pelo id number
  que é um parâmetro, onde no service de estado de persoangens ele é observable e acompanha qual é o personagem selecionado.
  */

  getCharById(idChar: number) {
    return this.http.get<{ char: Character[] }>(this.api).pipe(
      first(),
      /* personagem é cada objeto dentro do array char — o .find percorre um por um. personagem.id é o
      campo id desse objeto, e idChar é o parâmetro que você passou na função
      getCharById(id: number). Semelhante a um WHERE id = 2 em SQL.
      */
      map((data) => data.char.find((personagem) => personagem.id === idChar)!),
      /*O uso de ! serve para o typerScript não reclamar com  a possibilidade do retorno ser undefined,
      ou seja, basicamente estou dizendo para ele não se preocupar. */
    );
  }
}
