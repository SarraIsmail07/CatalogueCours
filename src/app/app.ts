import { Component, signal } from '@angular/core';
import { Tete } from './composants/tete/tete';
import { ListeCours } from './composants/liste-cours/liste-cours';
import { Pied } from './composants/pied/pied';
import { DetailCours } from './composants/detail-cours/detail-cours';
import { Cours } from './composants/liste-cours/liste-cours';

@Component({
  imports: [
    DetailCours,
    Tete,
    ListeCours,
    Pied
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
}
 