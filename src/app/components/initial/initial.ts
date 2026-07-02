import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { CharacterStateService } from '../../services/characterState/character-state-service';
@Component({
  selector: 'app-initial',
  imports: [CommonModule],
  templateUrl: './initial.html',
  styleUrl: './initial.scss',
})
export class Initial {
  personagens = [
    //ESTELAR
    {
      nome: 'Estelar',
      descricao:
        'Uma princesa do planeta Tamaran, dona de força extraordinária, habilidades de voo e rajadas de energia. Sua bondade, coragem e otimismo fazem dela uma das heroínas mais poderosas dos Titãs.',
      img: '/backgrounds/characters/starfire.png',
      imgSombra: 'backgrounds/shadows/sombra.estelar.png',
      corPrincipal: '#D84800',
      corSecundaria: '#6E1F00',
      width: 60,
      top: 8,
      right: 4,
      //mobile
      widthMobile: 70,
      topMobile: 17,
      rightMobile: 20,
    },
    //RAVENA
    {
      nome: 'Ravena',
      descricao:
        'Filha da humana Arella e do demônio Trigon, Ravena nasceu em Azarath e domina poderes místicos ligados às emoções. Sua sabedoria e autocontrole são essenciais para a equipe.',
      img: '/backgrounds/characters/raven.webp',
      imgSombra: '/backgrounds/shadows/sombra.ravena.png',
      corPrincipal: '#210776',
      corSecundaria: '#0f044a',
      width: 65,
      top: 8,
      right: 4,
      //mobile
      widthMobile: 90,
      topMobile: 17,
      rightMobile: 10,
    },
    {
      //ROBIN
      nome: 'Robin',
      descricao:
        'Líder estratégico dos Jovens Titãs, Robin compensa a ausência de superpoderes com inteligência, disciplina e domínio das artes marciais, inspirando sua equipe em cada missão.',
      img: '/backgrounds/characters/robin.webp',
      imgSombra: '/backgrounds/shadows/sombra.robin.png',
      corPrincipal: '#5D0000',
      corSecundaria: '#420000',
      width: 75,
      top: -10,
      right: 6,
      //mobile
      widthMobile: 90,
      topMobile: 3,
      rightMobile: 5,
    },
    //MUTANO
    {
      nome: 'Mutano',
      descricao:
        'Após adquirir a habilidade de se transformar em qualquer animal, Mutano tornou-se o integrante mais irreverente dos Titãs. Seu bom humor esconde uma coragem admirável.',
      img: '/backgrounds/characters/beastboy.webp',
      imgSombra: '/backgrounds/shadows/sombra.mutano.png',
      corPrincipal: '#0B4400',
      corSecundaria: '#051C00',
      width: 60,
      top: 8,
      right: 4,
      //mobile
      widthMobile: 60,
      topMobile: 17,
      rightMobile: 15,
    },
    //CYBORG
    {
      nome: 'Cyborg',
      descricao:
        'Metade humano e metade máquina, Cyborg combina tecnologia avançada, força sobre-humana e um grande espírito de equipe. Sua genialidade faz dele o inventor do grupo.',
      img: '/backgrounds/characters/cyborg.webp',
      imgSombra: '/backgrounds/shadows/sombra.cyborg.png',
      corPrincipal: '#004798',
      corSecundaria: '#003A7C',
      width: 60,
      top: 8,
      right: 4,
      //mobile
      widthMobile: 80,
      topMobile: 17,
      rightMobile: 13,
    },
  ];

  personagemHero = this.personagens[2]; //Robin default
  personagemAtivo = this.personagens[2];

  @ViewChild('flashRef') flashRef!: ElementRef;
  @ViewChild('heroRef') heroRef!: ElementRef;

  trocaOut = 2;

  constructor(private characterStateService: CharacterStateService) {}

  trocarPersonagem(index: number) {
    if (this.personagens[index] === this.personagemHero) return;

    const flash = this.flashRef.nativeElement;

    this.personagemHero = this.personagens[index];

    flash.classList.remove('active');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        flash.classList.add('active');
      });
    });
  }

  personagemSelecionado(index: number) {
    this.personagemAtivo = this.personagens[index];
    this.characterStateService.setPersonagem(index, this.personagens[index].corPrincipal);
    this.trocaOut = index;
  }

  isMobile = window.innerWidth <= 690;
  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 690;
  }
}
