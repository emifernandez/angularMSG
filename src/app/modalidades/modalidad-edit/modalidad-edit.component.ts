import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Modalidad } from 'src/app/models/modalidad.model';
import { ModalidadService } from 'src/app/services/modalidad.service';

@Component({
  selector: 'app-modalidad-edit',
  templateUrl: './modalidad-edit.component.html',
  styleUrls: ['./modalidad-edit.component.sass']
})
export class ModalidadEditComponent implements OnInit {
  id: number;
  modalidad: Modalidad;
  form: FormGroup;

  constructor(
    public modalidadService: ModalidadService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['modalidadId'];
    this.modalidadService.find(this.id).subscribe((data: Modalidad) => {
      const field = 'data';
      this.modalidad = data[field];
    });
    this.form = new FormGroup({
      descripcion: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  grabar(): void {
    this.modalidadService.update(this.id, this.form.value).subscribe((res) => {
      this.toastr.success('Modalidad actualizada correctamente!');
      this.router.navigateByUrl('modalidades');
    });
  }
}
