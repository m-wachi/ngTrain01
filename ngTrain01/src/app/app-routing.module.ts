import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { Input01Component } from './input01/input01.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'input01', component: Input01Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }