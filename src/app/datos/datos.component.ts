import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
})
export class DatosComponent implements OnInit {
  formulario!: FormGroup;
  texto!: '[a-z]*';
  perfil = this.form.group({
    firstName: ['', Validators.required],
    secondName: ['', Validators.required],
    thirthName: ['', Validators.required],
    fourthName: ['', Validators.required],
    fiveName: ['', Validators.required],
    sixName: ['', Validators.required],
    sevenName: ['', Validators.required],
    eightName: ['', Validators.required],
    nineName: ['', Validators.required],
    tenName: ['', Validators.required],
  });
  constructor(private form: FormBuilder) {}
  updateProfile() {
    this.perfil.patchValue({
      firstName: '',
      secondName: '',
      thirthName: '',
      fourthName: '',
      fiveName: '',
      sixName: '',
      sevenName: '',
      eightName: '',
      nineName: '',
      tenName: '',
    });
  }
  onSubmit() {
    const firstName = this.perfil.controls.firstName.value;
    const secondName = this.perfil.controls.secondName.value;
    const thirthName = this.perfil.controls.thirthName.value;
    const fourthName = this.perfil.controls.fourthName.value;
    const fiveName = this.perfil.controls.fiveName.value;
    const sixName = this.perfil.controls.sixName.value;
    const sevenName = this.perfil.controls.sevenName.value;
    const eightName = this.perfil.controls.eightName.value;
    const nineName = this.perfil.controls.nineName.value;
    const tenName = this.perfil.controls.tenName.value;

    console.log(this.perfil.value);
    this.perfil.reset();
  }
  ngOnInit(): void {}
}
