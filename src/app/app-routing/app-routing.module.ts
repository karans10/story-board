import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { UnauthenticatedComponent } from "../components/unauthenticated/unauthenticated.component";


const routes: Routes = [
  {path:'login', component:UnauthenticatedComponent},
  {path:'', redirectTo:'/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
