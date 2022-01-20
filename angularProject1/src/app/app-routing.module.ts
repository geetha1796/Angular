import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard/authguard.guard';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [{path:'',pathMatch:'full',component:LoginComponent},{path:'login',component:LoginComponent},{path:'registeration',component:RegisterationComponent},{path:'userdashboard',component:UserdashboardComponent,canActivate:[AuthguardGuard]},{path:'**',component:RegisterationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
