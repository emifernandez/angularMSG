import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModalidadService } from 'src/app/services/modalidad.service';

@Component({
  selector: 'app-modalidad-create',
  templateUrl: './modalidad-create.component.html',
  styleUrls: ['./modalidad-create.component.sass']
})
export class ModalidadCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    public modalidadService: ModalidadService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      descripcion: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  grabar(): void {
    this.modalidadService.create(this.form.value).subscribe((res) => {
      this.toastr.success('Modalidad grabada correctamente!');
      this.router.navigateByUrl('modalidades');
    });
  }

}
