import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: 'product-list', component:ProductListComponent},
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'create-product', component:CreateProductComponent},
  {path: 'update-product/:id', component:UpdateProductComponent},
  {path: 'feedback-list', component:FeedbackListComponent},
  {path: 'create-feedback/:id', component:CreateFeedbackComponent},
  {path: 'update-feedback/:id', component:UpdateFeedbackComponent},
  {path: 'feedback-details/:id',component:FeedbackDetailsComponent},
  {path: 'register',component:RegistrationComponent},
  {path: 'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'user-list',component:UserListComponent},
  {path:'product-details/:id',component:ProductDetailsComponent}
  
];
// const routes: Routes = [
//   {path: 'employees', component: EmployeeListComponent},
//   {path: 'create-employee', component: CreateEmployeeComponent},
//   {path: '', redirectTo: 'employees', pathMatch: 'full'},
//   {path: 'update-employee/:id', component: UpdateEmployeeComponent},
//   {path: 'employee-details/:id', component: EmployeeDetailsComponent}
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
