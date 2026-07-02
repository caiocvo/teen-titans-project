import { Ability } from '../../models/ability';
import { Character } from './../../models/character';
import { ChangeDetectorRef, Component } from '@angular/core';
import { AbilitiesService } from '../../services/abilities/abilities-service';
import { CharacterStateService } from '../../services/characterState/character-state-service';
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
  constructor(
    private characterStateService: CharacterStateService,
    private abilitiesService: AbilitiesService,
  ) {}

  ngOnInit() {
    //Pego o id atual do personagem para fazer o retorno
    //Após ter retornado o personagem, quero guardar as informações das habilidades
    //switchMap serve para não alinhar vários subscribes um dentro do outro, algo recomendado
    //subscribe "ativa" o observable de abilities, função do service

    this.characterStateService.idActual$
      .pipe(switchMap((index) => this.abilitiesService.getAbilities(index)))
      .subscribe((ad) => {
        this.ability = ad;
        console.log(ad);
      });
  }
}
