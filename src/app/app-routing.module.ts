import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'presence',
    pathMatch: 'full'
  },
  {
    path: 'presence',
    loadChildren: () =>
      import('./presence/presence.module').then((m) => m.PresenceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
