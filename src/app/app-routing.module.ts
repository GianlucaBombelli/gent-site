import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrafPageComponent } from './graf-page/graf-page.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GrafProdComponent } from './sub-components/graf-prod/graf-prod.component';
import { TonerProdComponent } from './sub-components/toner-prod/toner-prod.component';
import { VendProdComponent } from './sub-components/vend-prod/vend-prod.component';
import { TonerPageComponent } from './toner-page/toner-page.component';
import { VendPageComponent } from './vend-page/vend-page.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'home', component : HomeComponent},
  {path: 'grafica', component : GrafPageComponent, children: [
    {path: ':id', component : GrafProdComponent}
  ]},
  {path: 'vendita', component : VendPageComponent, children : [
    {path: ':id', component : VendProdComponent}
  ]},
  {path: 'toner', component : TonerPageComponent, children : [
    {path: ':id', component : TonerProdComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
