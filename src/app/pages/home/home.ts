import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core';
import { Landing } from '../../components/landing/landing';
import { Titans } from '../../components/titans/titans';
import { Powers } from '../../components/powers/powers';

@Component({
  selector: 'app-home',
  imports: [Landing, Titans],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
