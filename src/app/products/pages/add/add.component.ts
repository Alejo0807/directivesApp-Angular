import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    .hidden {
      display: none
    }
  `
  ]
})
export class AddComponent implements OnInit {

  text1: string = 'Debe ingresar un nombre'
  color: string = 'red'

  myForm: FormGroup = this.fb.group({
    name: [,Validators.required]
  })


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  hasError( field: string ): boolean {
    return this.myForm.get(field)?.invalid || false;
  }

  changeMsg() {
    this.text1 = 'Este campo es requerido';
  }

  changeColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
