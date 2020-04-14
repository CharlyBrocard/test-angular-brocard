import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayOneComponent } from './components/display-one/display-one.component';



const routes: Routes = [
  { path: '', component: DisplayOneComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
