import { Component, signal } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { ListeCours } from './composants/liste-cours/liste-cours';
import { PiedPage } from './composants/pied-page/pied-page';
import { DetailCours } from './composants/detail-cours/detail-cours';
import { Cours } from './composants/liste-cours/liste-cours';

@Component({
  imports: [
    DetailCours,
    EnTete,
    ListeCours,
    PiedPage
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
 