import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LibraryComponent } from './pages/library/library.component';
import { RegistryComponent } from './pages/registry/registry.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'registry', component: RegistryComponent },
  { path: '**', redirectTo: '' }
];
