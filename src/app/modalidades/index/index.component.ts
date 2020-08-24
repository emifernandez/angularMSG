import { Component, OnInit } from '@angular/core';
import { ModalidadService } from './../../services/modalidad.service';
import { Modalidad } from 'src/app/models/modalidad.model';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  modalidades: Modalidad[] = [];
  popoverTitle = 'Eliminar Registro';
  popoverMessage = '¿Esta Seguro que desea eliminar el registro?';

  constructor(private modalidadService: ModalidadService, private toastr: ToastrService) { }

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
    this.modalidadService.getAll().subscribe((data: Modalidad[]) => {
      const field = 'data';
      this.modalidades = data[field];
      this.dtTrigger.next();
    });
  }

  delete(id): void {
    this.modalidadService.delete(id).subscribe((res) => {
      this.modalidades = this.modalidades.filter((item) => item.id !== id);
      this.toastr.success('Modalidad eliminada correctamente!');
    });
  }

}
