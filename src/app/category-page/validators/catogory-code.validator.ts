import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function categoryCodeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;
    if (!/^[a-zA-Z]{3}\d{3}$/.test(value)) {
      return { invalidCodeFormat: true };
    }
    return null;
  };
}