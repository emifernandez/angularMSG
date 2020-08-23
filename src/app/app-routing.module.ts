import { EditComponent } from './roles/edit/edit.component';
import { CreateComponent } from './roles/create/create.component';
import { RolesComponent } from './roles/index/roles.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'roles/crear', component: CreateComponent},
  {path: 'roles/:rolId/editar', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
