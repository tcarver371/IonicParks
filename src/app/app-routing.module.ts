import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'park-list', loadChildren: './park-list/park-list.module#ParkListPageModule' },
  { path: 'park-map', loadChildren: './park-map/park-map.module#ParkMapPageModule' },
  { path: 'park-details', loadChildren: './park-details/park-details.module#ParkDetailsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
