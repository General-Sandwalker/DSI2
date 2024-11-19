import { Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CommandeComponent } from './commande/commande.component';
import { PanierComponent } from './panier/panier.component';

export const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent }, 
  { path: 'inscription', component: InscriptionComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'panier', component: PanierComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' } 
];
