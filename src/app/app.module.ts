import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { SortDirective } from './directive/sort.directive';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    UpdateProductComponent,
    FeedbackListComponent,
    CreateFeedbackComponent,
    UpdateFeedbackComponent,
    FeedbackDetailsComponent,
    SortDirective,
    RegistrationComponent,
    LoginComponent,
    AdminComponent,
    UserListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    // Ng2OrderModule
    
    
 
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
