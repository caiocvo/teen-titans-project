import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ElementRef, NgZone } from '@angular/core';

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
      descricao: 'Uma princesa alienígena com poderes incríveis.',
      img: '/backgrounds/characters/starfire.png',
      imgSombra: 'backgrounds/shadows/sombra.estelar.png',
      corPrincipal: '#D84800',
      corSecundaria: '#6E1F00',
      width: 500,
      top: 8,
      right: 40,
    },
    //RAVENA
    {
      nome: 'Ravena',
      descricao: 'Uma poderosa empata com habilidades místicas.',
      img: '/backgrounds/characters/raven.webp',
      imgSombra: '/backgrounds/shadows/sombra.ravena.png',
      corPrincipal: '#210776',
      corSecundaria: '#0f044a',
      width: 520,
      top: 8,
      right: 30,
    },
    {
      //ROBIN
      nome: 'Robin',
      descricao: 'O líder estratégico dos Titãs e mestre em combate.',
      img: '/backgrounds/characters/robin.webp',
      imgSombra: '/backgrounds/shadows/sombra.robin.png',
      corPrincipal: '#5D0000',
      corSecundaria: '#420000',
      width: 640,
      top: -8,
      right: 60,
    },
    //MUTANO
    {
      nome: 'Mutano',
      descricao: 'Um metamorfo habilidoso que se transforma em animais.',
      img: '/backgrounds/characters/beastboy.webp',
      imgSombra: '/backgrounds/shadows/sombra.mutano.png',
      corPrincipal: '#0B4400',
      corSecundaria: '#051C00',
      width: 520,
      top: 8,
      right: 80,
    },
    //CYBORG
    {
      nome: 'Cyborg',
      descricao: 'Um homem meio máquina meio humano com um grande coração.',
      img: '/backgrounds/characters/cyborg.webp',
      imgSombra: '/backgrounds/shadows/sombra.cyborg.png',
      corPrincipal: '#004798',
      corSecundaria: '#003A7C',
      width: 520,
      top: 8,
      right: 90,
    },
  ];
  personagemAtivo = this.personagens[2]; //Robin default

  @ViewChild('flashRef') flashRef!: ElementRef;
  @ViewChild('heroRef') heroRef!: ElementRef;

  private flashTimeout: any;

  trocarPersonagem(index: number) {
    if (this.personagens[index] === this.personagemAtivo) return;

    const flash = this.flashRef.nativeElement;

    // Troca IMEDIATO
    this.personagemAtivo = this.personagens[index];

    // Flash por cima é ativado ao trocarPersonagem
    flash.classList.remove('active');
    requestAnimationFrame(() => {
      flash.classList.add('active');
    });
  }
}
