import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {path:'', component:TestComponent },
  {path:'test', component:TestComponent },
  {path:'test2', component:Test2Component },
  {path:'form', component:FormComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
