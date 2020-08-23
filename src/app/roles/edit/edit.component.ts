import { RolService } from './../../services/rol.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/models/rol.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass'],
})
export class EditComponent implements OnInit {
  id: number;
  rol: Rol;
  form: FormGroup;

  constructor(
    public rolService: RolService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['rolId'];
    this.rolService.find(this.id).subscribe((data: Rol) => {
      const field = 'data';
      this.rol = data[field];
    });
    this.form = new FormGroup({
      descripcion: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  grabar(): void {
    this.rolService.update(this.id, this.form.value).subscribe((res) => {
      this.toastr.success('Rol actualizado con correctamente!');
      this.router.navigateByUrl('roles');
    });
  }
}
