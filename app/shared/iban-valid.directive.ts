import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function ibanValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const valid = control.value === 'iban' ? false : true;
    console.log('ibanValidator', control.value);
    return valid ? {'invalidIban': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appIbanValid]',
  providers: [{provide: NG_VALIDATORS, useExisting: IbanValidatorDirective, multi: true}]
})
export class IbanValidatorDirective implements Validator {


  validate(control: AbstractControl) {
    return control.value ? ibanValidator()(control) : null;
  }

}
