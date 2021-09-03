import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [

  { path: '', redirectTo:'forms', pathMatch: 'full' },
  { path: 'comp1', component: Comp1Component},
  { path: 'comp2', component: Comp2Component},
  { path: 'forms', component: FormsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
