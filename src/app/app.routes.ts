import { MapComponent } from './components/map/map.component';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', component: MapComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
