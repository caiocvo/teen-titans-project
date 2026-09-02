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
  ability?: Ability[]; //Array de habilidades de todo o personagem
  idActual = 2;
  colorsButton = ['#ff2f00', '#24005b', '#e80000', '#1b9100', '#0059bf'];
  abilityActivate = 1; //Index do array de habilidades

  constructor(
    private characterStateService: CharacterStateService,
    private abilitiesService: AbilitiesService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    /*Apenas para mudar a cor dos botões, reutilizamos o id do personagem ativado no momento
    como posição do vetor colorButton*/
    this.characterStateService.idActual$.subscribe((index) => {
      this.idActual = index;
    });
    this.characterStateService.idActual$
      .pipe(switchMap((index) => this.abilitiesService.getAbilities(index)))
      .subscribe((ad) => {
        this.ability = ad;
        this.abilityActivate = 0; // reseta seleção ao trocar de personagem, partindo sempre da primeira habilidade
        this.cdr.detectChanges();
      });
  }

  /*Uma função que recebe um número e guarda ele em abilityActivate. O clique no HTML vai
  chamar essa função passando o índice do botão clicado. */
  selectAbility(index: number) {
    this.abilityActivate = index;
  }

  /*Um getter é como uma propriedade "calculada" — toda vez que você escreve activeAbility em algum lugar,
  o Angular executa essa função e te devolve o resultado atualizado. Isso resolve o problema de inicializar uma variável
  sem receber os dados da API e ser nulo*/

  get activeAbility(): Ability | undefined {
    return this.ability?.[this.abilityActivate];
  }

  /*Pré carregamento de imagens */

  /*preLoardingImages(){
    const images = this.abilitiesService.getAbilities()
  } */
}
