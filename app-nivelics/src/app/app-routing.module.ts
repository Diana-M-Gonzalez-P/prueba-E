import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { FormComponent } from './components/form/form.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'card', component: CardComponent },
  { path: 'form', component: FormComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
