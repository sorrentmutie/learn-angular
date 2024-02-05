import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { ProductPipe } from './products/pipes/product.pipe';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { FooterDetailsComponent } from './shared/footer-details/footer-details.component';
import { RandomUserPageComponent } from './random-user/components/random-user-page/random-user-page.component';
import { PersonCardComponent } from './random-user/components/person-card/person-card.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { SpecialComponent } from './shared/special/special.component';
import { TemplateDrivenFormComponent } from './shared/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './shared/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ProductsListComponent,
    ProductPipe,
    ProductsPageComponent,
    ProductDetailsComponent,
    FooterDetailsComponent,
    RandomUserPageComponent,
    PersonCardComponent,
    NotFoundComponent,
    WelcomeComponent,
    SpecialComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
