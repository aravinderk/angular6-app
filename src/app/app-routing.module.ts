import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandDetailsComponent } from './brand/brandDetails.component';
import { AddBrandComponent } from './brand/addBrand.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'brand', component: BrandDetailsComponent},
  {path: 'add-brand', component: AddBrandComponent},
  {path: 'edit-brand', component: AddBrandComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
