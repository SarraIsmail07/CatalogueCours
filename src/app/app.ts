import { Component, signal, inject } from '@angular/core';
import { Tete } from './composants/tete/tete';
import { ListeCours } from './composants/liste-cours/liste-cours';
import { Pied } from './composants/pied/pied';
import { DetailCours } from './composants/detail-cours/detail-cours';
import { Cours } from './donnees/cours';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { Session } from './services/session';

@Component({
  imports: [
    DetailCours,
    Tete,
    ListeCours,
    Pied,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('catalogue-cours');
  coursSelectionne: Cours | null = null;

  onSelectionCours(c: Cours) {
    this.coursSelectionne = c;
  }

  session = inject(Session); 
  private router = inject(Router); 
  
  deconnecter() { 
    this.session.deconnecter(); 
    this.router.navigateByUrl('/'); 
  } 
}

 
 