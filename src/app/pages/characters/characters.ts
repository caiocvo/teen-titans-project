import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { InformationService } from './../../services/information/information-service';
import { Character } from '../../models/character';
import { CharacterStateService } from '../../services/characterState/character-state-service';
import { Description } from '../../components/description/description';
import { Nickname } from '../../components/nickname/nickname';
import { Powers } from '../../components/powers/powers';
import { HeroSection } from '../../components/hero-section/hero-section';

@Component({
  selector: 'app-characters',
  imports: [HeroSection, Description, Nickname, Powers],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters implements OnInit, AfterViewInit, OnDestroy {
  char?: Character;
  colorBorder: any;

  @ViewChild(HeroSection, { read: ElementRef }) heroElement!: ElementRef;
  @ViewChild(HeroSection) heroComponent!: HeroSection;

  private pageObserver?: IntersectionObserver;
  private saiuDoHero = false;

  @Output('submit') onSubmit = new EventEmitter();
  @Output('navigate') onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
  navigate() {
    this.onNavigate.emit();
  }

  constructor(
    private informationService: InformationService,
    private characterStateService: CharacterStateService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.characterStateService.idActual$.subscribe((index) => {
      this.informationService.getCharById(index).subscribe((data) => {
        this.char = data;
        this.cdr.detectChanges();
      });
    });
  }

  ngAfterViewInit() {
    this.pageObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          this.saiuDoHero = true;
        }

        if (entry.isIntersecting && this.saiuDoHero) {
          this.heroComponent.resetarSelecaoMobile();
          this.saiuDoHero = false;
          this.cdr.detectChanges();
        }
      },
      { threshold: 0.3 },
    );

    if (this.heroElement?.nativeElement) {
      this.pageObserver.observe(this.heroElement.nativeElement);
    }
  }

  ngOnDestroy() {
    this.pageObserver?.disconnect();
  }

  /*Fazendo pre loading das imagens de habilidades. Nessa função usamos o método getAllChars em
  informationService para conseguir ter todas informações dos personagens, mas o que de fato
  usamos foi os vetores de abilitys em cada objeto.
  Como o que é retornado dessa função é um Observable, não consigo usar o flatMap, logo,
  com auxilio do subscribe, guardamos em data. com isso, é possível continuar com a sintaxe
  de pré loading utilizada em hero-section também.*/
  
  preLoadingImages() {
    this.informationService.getAllChars().subscribe((data) => {
      const images = data.char.flatMap((character) =>
        character.abilities.map((ability) => ability.image),
      );

      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }
}
