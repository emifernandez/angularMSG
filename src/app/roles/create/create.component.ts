import { RolService } from './../../services/rol.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
})
export class CreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    public rolService: RolService,
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
    this.rolService.create(this.form.value).subscribe((res) => {
      this.toastr.success('Rol grabado con correctamente!');
      this.router.navigateByUrl('roles');
    });
  }
}
