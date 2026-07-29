import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterStateService } from '../../services/characterState/character-state-service';
@Component({
  selector: 'app-description',
  imports: [CommonModule],
  templateUrl: './description.html',
  styleUrl: './description.scss',
})
export class Description {
  @Input() title: string = '';
  @Input() text: string = '';
}
