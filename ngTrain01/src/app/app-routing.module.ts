import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { Input01Component } from './input01/input01.component';
import { Input02Component } from './input02/input02.component';
import { Input03Component } from './input03/input03.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'input01', component: Input01Component },
  { path: 'input02', component: Input02Component },
  { path: 'input03', component: Input03Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }