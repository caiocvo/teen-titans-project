import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;

  closeMenu() {
    const collapseElement = this.navbarCollapse.nativeElement;
    if (collapseElement.classList.contains('show')) {
      collapseElement.classList.remove('show');
    }
  }
}
