import { EditComponent } from './roles/edit/edit.component';
import { CreateComponent } from './roles/create/create.component';
import { RolesComponent } from './roles/index/roles.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './modalidades/index/index.component';
import { ModalidadEditComponent } from './modalidades/modalidad-edit/modalidad-edit.component';
import { ModalidadCreateComponent } from './modalidades/modalidad-create/modalidad-create.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'roles/crear', component: CreateComponent},
  {path: 'roles/:rolId/editar', component: EditComponent},

  {path: 'modalidades', component: IndexComponent},
  {path: 'modalidades/crear', component: ModalidadCreateComponent},
  {path: 'modalidades/:modalidadId/editar', component: ModalidadEditComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
