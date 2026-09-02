import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { CharacterStateService } from '../../services/characterState/character-state-service';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  personagens = [
    {
      nome: 'Estelar',
      descricao:
        'Uma princesa do planeta Tamaran, dona de força extraordinária, habilidades de voo e rajadas de energia. Sua bondade, coragem e otimismo fazem dela uma das heroínas mais poderosas dos Titãs.',
      img: '/backgrounds/characters/starfire.png',
      imgSombra: 'backgrounds/shadows/sombra.estelar.png',
      icone: '/backgrounds/icons/starfire-icon.png',
      corPrincipal: '#D84800',
      corSecundaria: '#6E1F00',
      width: 60,
      top: 8,
      right: 4,
    },
    {
      nome: 'Ravena',
      descricao:
        'Filha da humana Arella e do demônio Trigon, Ravena nasceu em Azarath e domina poderes místicos ligados às emoções. Sua sabedoria e autocontrole são essenciais para a equipe.',
      img: '/backgrounds/characters/raven.webp',
      imgSombra: '/backgrounds/shadows/sombra.ravena.png',
      icone: '/backgrounds/icons/raven-icon.png',
      corPrincipal: '#210776',
      corSecundaria: '#0f044a',
      width: 75,
      top: 8,
      right: 4,
    },
    {
      nome: 'Robin',
      descricao:
        'Líder estratégico dos Jovens Titãs, Robin compensa a ausência de superpoderes com inteligência, disciplina e domínio das artes marciais, inspirando sua equipe em cada missão.',
      img: '/backgrounds/characters/robin.webp',
      imgSombra: '/backgrounds/shadows/sombra.robin.png',
      icone: '/backgrounds/icons/robin-icon.png',
      corPrincipal: '#5D0000',
      corSecundaria: '#420000',
      width: 75,
      top: -10,
      right: 6,
    },
    {
      nome: 'Mutano',
      descricao:
        'Após adquirir a habilidade de se transformar em qualquer animal, Mutano tornou-se o integrante mais irreverente dos Titãs. Seu bom humor esconde uma coragem admirável.',
      img: '/backgrounds/characters/beastboy.webp',
      imgSombra: '/backgrounds/shadows/sombra.mutano.png',
      icone: '/backgrounds/icons/beastboy-icon.png',
      corPrincipal: '#0B4400',
      corSecundaria: '#051C00',
      width: 60,
      top: 8,
      right: 4,
    },
    {
      nome: 'Cyborg',
      descricao:
        'Metade humano e metade máquina, Cyborg combina tecnologia avançada, força sobre-humana e um grande espírito de equipe. Sua genialidade faz dele o inventor do grupo.',
      img: '/backgrounds/characters/cyborg.webp',
      imgSombra: '/backgrounds/shadows/sombra.cyborg.png',
      icone: '/backgrounds/icons/cyborg-icon.png',
      corPrincipal: '#004798',
      corSecundaria: '#003A7C',
      width: 60,
      top: 8,
      right: 4,
    },
  ];

  personagemHero = this.personagens[2];
  personagemAtivo = this.personagens[2];
  trocaOut = 2;
  mobileSelecionado = false;
  isMobile = window.innerWidth <= 820;

  @ViewChild('flashRef') flashRef!: ElementRef;
  @ViewChild('heroRef') heroRef!: ElementRef;

  private readonly DURACAO_TRANSICAO_MS = 550;

  constructor(
    private characterStateService: CharacterStateService,
    private cdr: ChangeDetectorRef,
  ) {}

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 1020;
  }

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

  preLoardingImages() {
    const images = this.personagens.flatMap((char) => [char.img, char.imgSombra, char.icone]);

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }
  personagemSelecionado(index: number) {
    this.personagemAtivo = this.personagens[index];
    this.characterStateService.setPersonagem(index, this.personagens[index].corPrincipal);
    this.trocaOut = index;

    if (this.isMobile) {
      this.selecionarMobile(index);
    }
  }

  private selecionarMobile(index: number) {
    this.trocarPersonagem(index);
    this.mobileSelecionado = true;

    setTimeout(() => {
      const proximaSecao = this.heroRef.nativeElement.nextElementSibling as HTMLElement | null;
      proximaSecao?.scrollIntoView({ behavior: 'smooth' });
    }, this.DURACAO_TRANSICAO_MS);
  }

  resetarSelecaoMobile() {
    this.mobileSelecionado = false;
    this.cdr.detectChanges();
  }
}
