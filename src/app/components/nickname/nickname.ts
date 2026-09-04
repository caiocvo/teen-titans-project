import { CharacterStateService } from './../../services/characterState/character-state-service';
import { Component, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-nickname',
  imports: [],
  templateUrl: './nickname.html',
  styleUrl: './nickname.scss',
})
export class Nickname {
  titans = [
    {
      name: 'Estelar',
      iconUrl: '/backgrounds/icons/starfire-icon.webp',
      iconColor: '#ef6d2c',
    },
    { name: 'Ravena', iconUrl: '/backgrounds/icons/raven-icon.webp', iconColor: '#480aa5' },

    { name: 'Robin', iconUrl: '/backgrounds/icons/robin-icon.webp', iconColor: '#af1414' },
    {
      name: 'Mutano',
      iconUrl: '/backgrounds/icons/beastboy-icon.webp',
      iconColor: '#40ba25',
    },
    { name: 'Cyborg', iconUrl: '/backgrounds/icons/cyborg-icon.webp', iconColor: '#317cd2' },
  ];

  constructor(
    private characterStateService: CharacterStateService,
    private cdr: ChangeDetectorRef,
  ) {}

  titanNick: any;

  ngOnInit() {
    this.characterStateService.idActual$.subscribe((index) => {
      this.titanNick = this.titans[index];
      this.cdr.detectChanges();
    });
  }
}
