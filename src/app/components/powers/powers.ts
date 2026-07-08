import { CharacterStateService } from './../../services/characterState/character-state-service';
import { Ability } from '../../models/ability';
import { Character } from './../../models/character';
import { ChangeDetectorRef, Component } from '@angular/core';
import { AbilitiesService } from '../../services/abilities/abilities-service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-powers',
  imports: [],
  templateUrl: './powers.html',
  styleUrl: './powers.scss',
})
export class Powers {
  char?: Character;
  ability?: Ability[];
  idActual = 2;
  colorsButton = ['#ff2f00', '#24005b', '#e80000', '#1b9100', '#0059bf'];
  constructor(
    private characterStateService: CharacterStateService,
    private abilitiesService: AbilitiesService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    //Pego o id atual do personagem para fazer o retorno
    //Após ter retornado o personagem, guardo as informações das habilidades
    //switchMap serve para não alinhar vários subscribes um dentro do outro, algo recomendado
    //subscribe "ativa" o observable de abilities, função do service

    this.characterStateService.idActual$.subscribe((index) => {
      this.idActual = index;
    });
    this.characterStateService.idActual$
      .pipe(switchMap((index) => this.abilitiesService.getAbilities(index)))
      .subscribe((ad) => {
        this.ability = ad;
        console.log(ad);
        this.cdr.detectChanges(); // Obriga a aparecer a imagem
      });
  }
}
