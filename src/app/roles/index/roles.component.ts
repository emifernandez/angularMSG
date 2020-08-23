import { RolService } from './../../services/rol.service';
import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/models/rol.model';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.sass'],
})
export class RolesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  roles: Rol[] = [];
  popoverTitle = 'Eliminar Registro';
  popoverMessage = '¿Esta Seguro que desea eliminar el registro?';

  constructor(public rolService: RolService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        processing: 'Procesando...',
        search: 'Buscar:',
        lengthMenu: 'Mostrar _MENU_ registros',
        info: 'Mostrando desde _START_ al _END_ de _TOTAL_ registros',
        infoEmpty: 'Mostrando ningún registro.',
        infoFiltered: '(filtrado _MAX_ registros total)',
        infoPostFix: '',
        loadingRecords: 'Cargando registros...',
        zeroRecords: 'No se encontraron registros',
        emptyTable: 'No hay datos disponibles',
        paginate: {
          first: 'Primero',
          previous: 'Anterior',
          next: 'Siguiente',
          last: 'Último',
        },
        aria: {
          sortAscending: ': Activar para ordenar la tabla en orden ascendente',
          sortDescending:
            ': Activar para ordenar la tabla en orden descendente',
        },
      },
    };
    this.get();
  }

  get(): void {
    this.rolService.getAll().subscribe((data: Rol[]) => {
      const field = 'data';
      this.roles = data[field];
      this.dtTrigger.next();
    });
  }

  delete(id): void {
    this.rolService.delete(id).subscribe((res) => {
      this.roles = this.roles.filter((item) => item.id !== id);
      this.toastr.success('Rol eliminado con correctamente!');
    });
  }
}
