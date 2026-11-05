import { Component, Input, inject } from '@angular/core'; 
import { RouterLink } from '@angular/router'; 
import { COURS, Cours } from '../../donnees/cours'; 
import { DetailCours } from '../../composants/detail-cours/detail-cours';
import { Catalogue } from '../../services/catalogue'; 
  
@Component({ 
  selector: 'app-page-detail', 
  imports: [DetailCours, RouterLink], 
  templateUrl: './page-detail.html', 
  styleUrl: './page-detail.css', 
}) 
export class PageDetail { 
  @Input() id = ''; 
  private catalogue = inject(Catalogue);
  
  get cours(): Cours | undefined {
    return this.catalogue.trouver(Number(this.id));
  } 
} 