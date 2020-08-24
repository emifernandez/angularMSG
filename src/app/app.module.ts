import { HttpClientModule } from '@angular/common/http';
import { RolesComponent } from './roles/index/roles.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './roles/create/create.component';
import { EditComponent } from './roles/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DataTablesModule } from 'angular-datatables';
import { IndexComponent } from './modalidades/index/index.component';
import { ModalidadCreateComponent } from './modalidades/modalidad-create/modalidad-create.component';
import { ModalidadEditComponent } from './modalidades/modalidad-edit/modalidad-edit.component';

@NgModule({
  declarations: [AppComponent, RolesComponent, CreateComponent, EditComponent, IndexComponent, ModalidadCreateComponent, ModalidadEditComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule,
    ToastrModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
      confirmText: 'Eliminar',
      cancelText: 'Cancelar',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
