import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;

    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasCapitalLetter = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasMinimumLength = value.length >= 8;
    if (!(hasSpecialCharacter && hasCapitalLetter && hasNumber && hasMinimumLength)) {
      return {
        passwordRequirements: true,
        missingSpecialCharacter: !hasSpecialCharacter,
        missingCapitalLetter: !hasCapitalLetter,
        missingNumber: !hasNumber,
        insufficientLength: !hasMinimumLength,
      };
    }

    return null;
  };
}