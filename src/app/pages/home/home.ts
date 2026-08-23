import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core';
import { Lading } from '../../components/lading/lading';
import { Titans } from '../../components/titans/titans';
import { Powers } from '../../components/powers/powers';

@Component({
  selector: 'app-home',
  imports: [Lading, Titans, Powers],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
