import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./support.scss']
})
export class Support {
  supportForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.supportForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      oggetto: ['', Validators.required],
      messaggio: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.supportForm.valid) {
      console.log('Invio modulo:', this.supportForm.value);
      alert('Messaggio inviato con successo!');
      this.supportForm.reset();
      this.submitted = false;
    }
  }
}
