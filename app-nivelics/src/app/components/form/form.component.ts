import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formEj: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formEj = this.formBuilder.group({
      name: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[a-zA-Z0-9-]+')]]
    });
  }

  get formL() { return this.formEj.controls; }

  getSubmit(form){
    if (form.invalid) {
      console.log('invalid');
    } else {
      console.log('valid');
    }
  }

}
