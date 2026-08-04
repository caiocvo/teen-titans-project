import { Component, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { InformationService } from './../../services/information/information-service';
import { Character } from '../../models/character';
import { CharacterStateService } from '../../services/characterState/character-state-service';
import { Description } from '../../components/description/description';
import { Nickname } from '../../components/nickname/nickname';
import { Powers } from '../../components/powers/powers';
import { HeroSection } from '../../components/hero-section/hero-section';
@Component({
  selector: 'app-characters',
  imports: [Navbar, HeroSection, Footer, Description, Nickname, Powers],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters {
  char?: Character;
  colorsButton = ['#fa5530', '#5926a5', '#d92727', '#44ad2d', '#3c7fcb'];
  colorBorder: any;

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
        this.colorBorder = this.colorsButton[index];
        this.cdr.detectChanges();
      });
    });
  }
}
