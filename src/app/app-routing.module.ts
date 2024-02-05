import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { RandomUserPageComponent } from './random-user/components/random-user-page/random-user-page.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SpecialComponent } from './shared/special/special.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { TemplateDrivenFormComponent } from './shared/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './shared/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/:id', component: ProductDetailsComponent},
  { path: 'random', component: RandomUserPageComponent},
  { path: 'special', component: SpecialComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'template', component: TemplateDrivenFormComponent},
  { path: 'reactive', component: ReactiveFormComponent },
  { path: '', redirectTo:"reactive", pathMatch: "full"},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
