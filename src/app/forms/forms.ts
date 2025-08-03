import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Housing } from '../housing.service';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
})
export class Forms {
  housingService = inject(Housing);
  applyForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  submitApplication() {
    this.applyForm.valid
      ? this.housingService.submitApplication(
          this.applyForm.value.firstName ?? '',
          this.applyForm.value.lastName ?? '',
          this.applyForm.value.email ?? ''
        )
      : '';
  }
}
