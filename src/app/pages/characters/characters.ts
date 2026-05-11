import { Component, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Initial } from '../../components/initial/initial';
import { Footer } from '../../components/footer/footer';
import { InformationService } from './../../services/information/information-service';
import { Character } from '../../models/character';
import { CharacterStateService } from '../../services/characterState/character-state-service';
import { Description } from '../../components/description/description';
import { Nickname } from '../../components/nickname/nickname';
@Component({
  selector: 'app-characters',
  imports: [Navbar, Initial, Footer, Description, Nickname],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters {
  char?: Character;

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
}
