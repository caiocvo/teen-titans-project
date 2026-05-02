import { InformationService } from './../../services/information/information-service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Character } from '../../models/character';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-description',
  imports: [CommonModule],
  templateUrl: './description.html',
  styleUrl: './description.scss',
})
export class Description implements OnInit {
  char?: Character;

  constructor(
    private informationService: InformationService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.informationService.getCharById(0).subscribe((data) => {
      this.char = data;
      this.cdr.detectChanges();
    });
  }
}
