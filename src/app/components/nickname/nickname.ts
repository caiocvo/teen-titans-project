import { CharacterStateService } from './../../services/characterState/character-state-service';
import { Component, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-nickname',
  imports: [],
  templateUrl: './nickname.html',
  styleUrl: './nickname.scss',
})
export class Nickname {
  nomesTitans = ['Estelar', 'Ravena', 'Robin', 'Mutano', 'Cyborg'];

  constructor(
    private characterStateService: CharacterStateService,
    private cdr: ChangeDetectorRef,
  ) {}

  name: any;

  ngOnInit() {
    this.characterStateService.idActual$.subscribe((index) => {
      this.name = this.nomesTitans[index];
      this.cdr.detectChanges();
    });
  }
}
