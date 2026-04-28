import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Initial } from '../../components/initial/initial';
import { Footer } from '../../components/footer/footer';
@Component({
  selector: 'app-characters',
  imports: [Navbar, Initial, Footer],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters {}
