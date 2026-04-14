import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Initial } from '../../components/initial/initial';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar, Initial, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
