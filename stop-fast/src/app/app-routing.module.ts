import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntrarComponent } from './components/entrar/entrar.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { SairComponent } from './components/sair/sair.component';
import { FinancasComponent } from './components/financas/financas.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  
  {path:'entrar', component:EntrarComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'financas', component:FinancasComponent},
  {path:'login', component:LoginComponent},
  {path:'sair', component:SairComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
