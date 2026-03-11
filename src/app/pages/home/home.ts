import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Initial } from '../../components/initial/initial';

@Component({
  selector: 'app-home',
  imports: [Navbar, Initial],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
