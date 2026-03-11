import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-initial',
  imports: [CommonModule],
  templateUrl: './initial.html',
  styleUrl: './initial.scss',
})
export class Initial {
  title: string = 'HERÓIS DE JUMP CITY';
  paragraph: string = 'Passe o mouse sobre um Titã para conhecer melhor cada herói.';

  defaultTitle: string = this.title;
  defaultParagraph: string = this.paragraph;

  changeText(title: string, paragraph: string) {
    this.title = title;
    this.paragraph = paragraph;
  }

  resetText() {
    this.title = this.defaultTitle;
    this.paragraph = this.defaultParagraph;
  }
}
